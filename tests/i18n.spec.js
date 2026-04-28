// @ts-check
const { test, expect } = require('@playwright/test');

// test.describe() regroupe les tests par contexte — utile quand plusieurs fichiers tournent ensemble
test.describe('version française', () => {
  test('la page /fr/accueil charge correctement', async ({ page }) => {
    const response = await page.goto('/fr/accueil');
    expect(response.status()).toBe(200);
  });

  test('la navbar affiche les liens en français', async ({ page }) => {
    await page.goto('/fr/accueil');
    const nav = page.getByRole('navigation');
    // On vérifie les labels FR — si un lien EN apparaît, le routing i18n est cassé
    await expect(nav.getByRole('link', { name: 'accueil' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'projets' })).toBeVisible();
  });

  test('le switcher de langue pointe vers /en/home', async ({ page }) => {
    await page.goto('/fr/accueil');
    // Le footer génère des liens avec lang= et hreflang= pour chaque traduction
    // on cible le lien par son attribut hreflang plutôt que par son texte (plus stable)
    const langSwitcher = page.locator('footer a[hreflang="en"]');
    await expect(langSwitcher).toBeVisible();
    await expect(langSwitcher).toHaveAttribute('href', '/en/home');
  });

  test('cliquer sur le switcher navigue vers la version EN', async ({ page }) => {
    await page.goto('/fr/accueil');
    await page.locator('footer a[hreflang="en"]').click();
    await expect(page).toHaveURL(/\/en\/home/);
  });
});
