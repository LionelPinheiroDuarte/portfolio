// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Playwright cherche les fichiers de test dans ce dossier (récursivement)
  testDir: './tests',

  // Chaque test a 30s max — suffisant pour un site statique
  timeout: 30_000,

  // En cas d'échec : 0 retry en local, 1 en CI (évite les faux positifs réseau)
  retries: process.env.CI ? 1 : 0,

  use: {
    // baseURL évite de répéter l'URL complète dans chaque test :
    // page.goto('/en/home') au lieu de page.goto('https://...')
    baseURL: 'https://lionelpinheiroduarte.com',

    // headless: true → pas de fenêtre visible (obligatoire en CI)
    // En local, passer à false pour voir le navigateur en action
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
