// @ts-check
const { test, expect } = require('@playwright/test');

// page.goto() avec un chemin relatif → Playwright préfixe automatiquement avec baseURL
// Résultat : https://lionelpinheiroduarte.com/en/

test('la page home EN charge correctement', async ({ page }) => {
  // goto() retourne la réponse HTTP — on peut vérifier le status directement
  const response = await page.goto('/en/home');
  expect(response.status()).toBe(200);
});

test('le titre <title> est défini et non vide', async ({ page }) => {
  await page.goto('/en/home');
  // toHaveTitle() accepte une string ou une regex
  // On vérifie juste qu'un titre existe — pas de valeur exacte pour rester robuste
  await expect(page).toHaveTitle(/.+/);
});

test('la navbar contient les liens de navigation', async ({ page }) => {
  await page.goto('/en/home');
  // Deux <nav> (en-tête et pied de page) : on cible la navigation principale par son nom
  const nav = page.getByRole('navigation', { name: 'Primary' });
  await expect(nav).toBeVisible();

  // getByRole('link') dans le nav — on vérifie qu'il y a au moins 2 liens
  const links = nav.getByRole('link');
  await expect(links).toHaveCount(2);
});

test('le lien projects navigue vers /en/projects/', async ({ page }) => {
  await page.goto('/en/home');
  const nav = page.getByRole('navigation', { name: 'Primary' });

  // click() simule un vrai clic — on teste le comportement réel, pas juste l'attribut href
  await nav.getByRole('link', { name: /projects/i }).click();
  await expect(page).toHaveURL(/\/en\/projects\//);
});

test('le footer donne accès aux mentions légales', async ({ page }) => {
  await page.goto('/en/home');
  const footerNav = page.getByRole('navigation', { name: 'Information' });
  await footerNav.getByRole('link', { name: 'legal notice' }).click();
  await expect(page).toHaveURL(/\/en\/legal-notice/);
});
