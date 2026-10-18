// @ts-check
const { test, expect } = require('@playwright/test');

// Pages projet, médias, thème et liens internes

const pages = [
  '/fr/accueil', '/en/home', '/fr/projets/', '/en/projects/',
  '/fr/mentions-legales', '/en/legal-notice', '/fr/404.html', '/en/404.html',
  ...['infra-lab', 'vocab', 'toolbox', 'portfolio', 'brain'].flatMap(p => [`/fr/projet/${p}/`, `/en/project/${p}/`])
];

test('aucun lien ni média interne cassé', async ({ page, request }) => {
  const targets = new Set();
  for (const url of pages) {
    await page.goto(url);
    const found = await page.$$eval('a[href], img[src], video[src], video[poster], link[href]', els =>
      els.flatMap(el => ['href', 'src', 'poster'].map(a => el.getAttribute(a)).filter(Boolean)));
    found.filter(u => u.startsWith('/') && !u.startsWith('//')).forEach(u => targets.add(u.split('#')[0]));
  }
  const broken = [];
  for (const target of targets) {
    const response = await request.get(target);
    if (response.status() !== 200) broken.push(`${target} → ${response.status()}`);
  }
  expect(broken).toEqual([]);
});

test('une page projet affiche son en-tête et ses liens', async ({ page }) => {
  await page.goto('/en/project/infra-lab/');
  await expect(page.locator('h1')).toHaveText('infra-lab');
  await expect(page.locator('.hero .badge')).toBeVisible();
  await expect(page.locator('.hero a.btn--primary')).toHaveAttribute('href', 'https://github.com/LionelPinheiroDuarte/infra-lab');
  await expect(page.locator('.facts__item')).toHaveCount(3);
  await expect(page.locator('.timeline__step')).toHaveCount(3);

  // Le pager mène au projet suivant dans l'ordre des projets
  await page.locator('.pager__link--next').click();
  await expect(page).toHaveURL(/\/en\/project\/vocab\//);
});

test('le switcher de langue mène à la même page projet', async ({ page }) => {
  await page.goto('/fr/projet/toolbox/');
  await page.locator('footer a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/en\/project\/toolbox\//);
});

test('la lightbox se parcourt au clavier et rend le focus', async ({ page }) => {
  await page.goto('/en/project/vocab/');
  const zoom = page.locator('[data-shots-zoom]');
  await zoom.click();
  const box = page.locator('#lightbox');
  await expect(box).toBeVisible();
  await expect(page.locator('.lightbox__close')).toBeFocused();

  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.lightbox__caption')).toHaveText('Showcase site');

  // Le focus reste dans la fenêtre
  for (let i = 0; i < 4; i++) await page.keyboard.press('Tab');
  expect(await page.evaluate(() => !!document.activeElement?.closest('#lightbox'))).toBe(true);

  await page.keyboard.press('Escape');
  await expect(box).toBeHidden();
  await expect(zoom).toBeFocused();
  // Le cadre affiche la capture vue en dernier
  await expect(page.locator('.shots__title')).toHaveText('Showcase site');
});

test('le thème choisi est appliqué dès le chargement de la page suivante', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/en/home');
  await page.locator('#theme-toggle').click();
  await expect(page.locator('html')).toHaveClass(/dark/);

  // La classe doit être posée avant le premier rendu, sans attendre scripts.js
  await page.route('**/scripts.js', route => route.abort());
  await page.goto('/en/projects/');
  await expect(page.locator('html')).toHaveClass(/dark/);
});

// Transition entre pages (View Transitions) : présente par défaut, absente en mouvement réduit
for (const [reducedMotion, expected] of [['no-preference', true], ['reduce', false]]) {
  test(`transition de page avec reducedMotion=${reducedMotion}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    // pagereveal indique si la nouvelle page arrive avec une transition
    await page.addInitScript(() => {
      window.addEventListener('pagereveal', e => { window.__transition = !!e.viewTransition; });
    });
    await page.goto('/en/home');
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'projects' }).click();
    await expect(page).toHaveURL(/\/en\/projects\//);
    await page.waitForFunction(() => '__transition' in window);
    expect(await page.evaluate(() => window.__transition)).toBe(expected);
  });
}
