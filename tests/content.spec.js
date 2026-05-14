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
  // getByRole('link') avec href — on cherche un lien pointant vers LinkedIn
  const linkedInLink = page.getByRole('link', { name: /contact/i });
  await expect(linkedInLink).toBeVisible();
  await expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/lionel-pinheiro/');
});

test('la page projects liste les projets', async ({ page }) => {
  await page.goto('/en/projects/');
  // On vérifie que les projets clés sont bien affichés dans le tableau
  // locator('table') cible le <table> généré par le macro projectSection
  const table = page.locator('table');
  await expect(table.first()).toBeVisible();

  // Vérification des titres de projets attendus
  // On cible le lien dans la 1ère colonne (td:first-child) pour éviter
  // le strict mode violation avec les icônes GitHub/website qui partagent le même nom
  for (const project of ['brain', 'infra-lab', 'toolbox']) {
    await expect(page.locator(`td:first-child a[href*="/project/${project}/"]`)).toBeVisible();
  }
});

test('chaque projet a un lien GitHub', async ({ page }) => {
  await page.goto('/en/projects/');
  // Tous les projets ont un champ repo → tous doivent avoir une icône GitHub cliquable
  // On récupère tous les liens pointant vers github.com/lionelpinheiroduarte
  const githubLinks = page.locator('a[href*="github.com/lionelpinheiroduarte"]');
  await expect(githubLinks).toHaveCount(4);
});
