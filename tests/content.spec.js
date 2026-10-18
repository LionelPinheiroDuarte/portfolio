// @ts-check
const { test, expect } = require('@playwright/test');

// Tests sur le contenu visible — nom, liens de contact, liste des projets

test('le nom est visible sur la page home', async ({ page }) => {
  await page.goto('/en/home');
  // on cible le <h1> pour éviter le match sur le footer (© Lionel…)
  const heading = page.locator('h1');
  await expect(heading.locator('text=lionel')).toBeVisible();
  await expect(heading.locator('text=pinheiro duarte')).toBeVisible();
});

test('le lien LinkedIn est présent', async ({ page }) => {
  await page.goto('/en/home');
  // Le bouton principal du hero pointe vers LinkedIn (l'encadré de fin de page aussi)
  const linkedInLink = page.locator('.hero a.btn--primary');
  await expect(linkedInLink).toBeVisible();
  await expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/lionel-pinheiro/');
});

test('la page projects liste les projets', async ({ page }) => {
  await page.goto('/en/projects/');
  // Chaque projet est un <article class="project-row"> dont le titre pointe vers sa page
  for (const project of ['brain', 'infra-lab', 'toolbox', 'vocab', 'portfolio']) {
    await expect(page.locator(`.project-row__title a[href="/en/project/${project}/"]`)).toBeVisible();
  }
});

test('chaque projet a un lien GitHub', async ({ page }) => {
  await page.goto('/en/projects/');
  // Autant de liens « Code » que de lignes : ajouter un projet ne casse pas le test
  const rows = await page.locator('.project-row').count();
  expect(rows).toBeGreaterThan(0);
  const githubLinks = page.locator('.project-row a[href^="https://github.com/LionelPinheiroDuarte/"]');
  await expect(githubLinks).toHaveCount(rows);
});

test('la page home met en avant les projets star', async ({ page }) => {
  await page.goto('/en/home');
  const titles = page.locator('.project-row__title a');
  await expect(titles).toHaveText(['infra-lab', 'vocab', 'toolbox']);
});
