// @ts-check
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

// Audit axe-core (WCAG 2.2 A/AA) de chaque page du sitemap + mentions légales,
// en mode clair et sombre : les contrastes changent d'un thème à l'autre.
const pages = [
  '/fr/accueil', '/en/home', '/fr/projets/', '/en/projects/',
  '/fr/mentions-legales', '/en/legal-notice', '/fr/404.html', '/en/404.html',
  ...['infra-lab', 'vocab', 'toolbox', 'portfolio', 'brain'].flatMap(p => [`/fr/projet/${p}/`, `/en/project/${p}/`])
];

for (const scheme of ['light', 'dark']) {
  test.describe(`accessibilité (${scheme})`, () => {
    test.use({ colorScheme: scheme });
    for (const url of pages) {
      test(url, async ({ page }) => {
        await page.goto(url);
        const { violations } = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          .analyze();
        // Message lisible : règle, impact et premiers éléments en cause
        const summary = violations.map(v =>
          `${v.id} (${v.impact}): ${v.nodes.slice(0, 3).map(n => n.target.join(' ')).join(' | ')}`);
        expect(summary).toEqual([]);
      });
    }
  });
}
