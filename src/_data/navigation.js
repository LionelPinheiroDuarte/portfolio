// Header navigation per language; footerLinks are the secondary pages listed
// on the left of the footer (legal notice today, more later)
module.exports = {
    footerLinks: {
        fr: [
            { text: 'mentions légales', url: '/fr/mentions-legales' }
        ],
        en: [
            { text: 'legal notice', url: '/en/legal-notice' }
        ]
    },
    en: [
      {
        text: 'home',
        url: '/en/home',
        prefix: '/en/home'
      },
      {
        text: 'projects',
        url: '/en/projects/',
        prefix: '/en/project'
      }
    ],
    fr: [
      {
        text: 'accueil',
        url: '/fr/accueil',
        prefix: '/fr/accueil'
      },
      {
        text: 'projets',
        url: '/fr/projets/',
        prefix: '/fr/projet'
      },
    ]
};