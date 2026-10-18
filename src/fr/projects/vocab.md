---
title: vocab
description: Une application mobile de vocabulaire développée avec React Native et Expo — sauvegarde de mots, révision en flashcard, site vitrine et bêta Android.
layout: project.njk
repo: vocab
tags: ["projects_fr", "webdev", "star"]
websiteName: Vocab
websiteUrl: https://vocab.lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/vocab-app.webp"
    alt: "Vocab — écrans Accueil, Fiche du mot (mode sombre) et Révision"
  - src: "/images/projects/vocab-site.webp"
    alt: "Vocab — site vitrine : « Les beaux mots ne devraient pas s’oublier. »"
  - src: "/images/projects/vocab-emails.webp"
    alt: "Vocab — e-mails de confirmation et d’invitation à la bêta"
permalink: fr/projet/vocab/
templateEngineOverride: njk, md
---

# **Vocab**

Une application mobile de gestion de vocabulaire pour constituer et réviser une collection de mots personnelle. Cherche un mot, sélectionne la définition qui correspond au contexte, sauvegarde-la en local et révise avec des flashcards. Les mots sauvegardés et les sessions de révision fonctionnent sans connexion — seule la recherche en nécessite une. L'app est en test interne sur Google Play, avec un site vitrine pour rejoindre la bêta.

{% include "partials/carousel.njk" %}

## Liens

- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/vocab)
- Site : [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com)

## Architecture technique

<img src="/images/projects/vocab.svg" class="diagram" alt="Schéma d'architecture de Vocab : Wiktionnaire, SQLite, EAS Build, Play Store">

## Frontend

Développé avec **React Native** et **Expo SDK 57**, avec un routage basé sur les fichiers (expo-router) et une architecture stricte en trois couches :

- **Service** — récupère et parse les définitions depuis une API externe à chaque recherche
- **SQLite** (`expo-sqlite`) — persiste les mots et définitions en local après sauvegarde
- **Zustand** — store en mémoire faisant le pont entre la base de données et l'UI

Chaque écran est sans état par conception. Toute la logique vit dans des hooks personnalisés — machine d'état de recherche, session flashcard, sélecteur de définition — pour que les composants se concentrent uniquement sur le rendu.

L'identité visuelle, **« Carnet »**, traite l'app comme un dictionnaire de poche que l'on annote : papier chaud, encre noire et un seul accent bordeaux, Literata pour les mots et définitions, Instrument Sans pour l'interface, des filets plutôt que des ombres. Toutes les valeurs vivent dans un unique fichier de tokens (palettes claire et sombre, échelle typographique en 6 tailles, espacements sur une base de 4), et un petit helper `createThemedStyles` construit les deux feuilles de style une seule fois : aucun écran ne code de couleur en dur.

## Site vitrine

Le site [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com) prolonge la direction « Carnet » sur le web. Il part d'une maquette HTML/CSS statique, intégrée ensuite en **Eleventy 3** : un layout unique, et le domaine, le nom et l'e-mail centralisés dans un seul fichier de données. Le HTML généré a été comparé à la maquette page par page, pour vérifier qu'il était identique hormis les liens.

- **Sans traceur** : polices auto-hébergées, aucun cookie, aucune ressource tierce — ce qui permet une Content-Security-Policy stricte
- **Accessibilité** : lien d'évitement, onglets au clavier selon le motif ARIA, contrastes AA, rendu complet sans JavaScript
- **Pages légales** rédigées à partir du code réel de l'app, en français et en anglais pour la politique de confidentialité — ce qui a révélé au passage que la sauvegarde Android (`allowBackup`) était active par défaut

### Bêta en double opt-in, sans base de données

Le formulaire d'inscription tourne en **PHP** sur l'hébergement, sans service tiers et sans stocker d'adresse :

1. le formulaire envoie un **e-mail de confirmation** à l'adresse saisie ;
2. son lien ouvre une page à bouton — un simple clic sur le lien ne suffit pas, car les antivirus de messagerie ouvrent les liens tout seuls ;
3. la confirmation envoie l'**invitation** avec le lien du test Google Play et me prévient.

Les liens portent l'adresse et une **signature HMAC-SHA256** (clé injectée au build depuis un secret GitHub), ils expirent au bout de 48 h et ne servent qu'une fois : six clics simultanés ne déclenchent qu'un seul envoi. Les e-mails, en texte et HTML, sont construits en tableaux avec des styles en ligne et sans image, pour rester fidèles au design dans Gmail comme dans Outlook. Tout le parcours a été testé sous Apache dans Docker (liens falsifiés, expirés ou réutilisés, envoi depuis un autre site, clé absente) avant la mise en ligne.

## DevOps

Builds dans le cloud via **EAS Build** — sans Android Studio en local :

- `eas build --platform android` → `.aab` signé avec `versionCode` auto-incrémenté
- `eas submit --platform android` → upload direct vers la piste interne du Play Store

CI/CD via GitHub Actions, réparti en quatre workflows :

- `ci.yml` — lint + typecheck + tests unitaires à chaque push sur `dev`
- `release-build.yml` — déclenche un build EAS automatiquement sur les tags
  de version majeure (`v2.0.0`, `v3.0.0`, ...)
- `release-submit.yml` — étape manuelle (`workflow_dispatch`) qui soumet le
  dernier build à la piste Internal Testing du Play Store — volontairement
  séparée et manuelle pour garder un point de contrôle humain avant la
  publication réelle, les environnements GitHub avec reviewers requis
  n'étant pas disponibles sur un repo privé en plan gratuit
- `site.yml` — pour le site vitrine : build, validation HTML, liens cassés
  (lychee) et **Lighthouse CI** avec des seuils minimaux, puis déploiement
  **FTPS** vers o2switch depuis `main` uniquement, seulement si tout est vert,
  suivi d'un smoke test de la production. Le `.htaccess` est généré au build
  (HTTPS forcé, HSTS, CSP, cache long des fichiers versionnés par empreinte)

Mises à jour OTA via **EAS Update** : `runtimeVersion` utilise une politique
`fingerprint`, si bien qu'une commande `./v update` maison hashe le build natif
courant et le compare au fingerprint du dernier build EAS avant de publier —
en cas de correspondance, un update JS seul part directement vers les
appareils ; en cas de différence (code natif modifié), le script s'arrête et
indique de repasser par un rebuild complet plutôt que de pousser un update
incompatible en silence. `./v rollback` revient à l'update embarqué d'un
channel via `eas update:roll-back-to-embedded` en cas d'OTA cassé.

Observabilité via **Sentry** : capture des crashs/erreurs (environnement dev
vs production distingué), vérifiée end-to-end en production. `release-build.yml`
et `release-submit.yml` reportent aussi à Sentry — chaque release y est liée
aux commits qui l'ont composée et le déploiement réel est marqué une fois
qu'il atteint les testeurs, pour la détection de commit suspect et le taux
crash-free par version.

## Construit avec

- **React Native / Expo SDK 57** — framework mobile cross-platform
- **expo-router** — navigation basée sur le système de fichiers
- **expo-sqlite** — stockage SQLite local (synchrone, offline-first)
- **Zustand** — gestion d'état global légère
- **react-native-reanimated v4** — animations et gestes
- **Sentry** (`@sentry/react-native`) — capture des crashs et erreurs, releases
  liées au CI/CD pour le suivi des régressions
- **EAS Build, Submit + Update** — builds cloud, upload Play Store et updates
  OTA vérifiées par fingerprint
- **Eleventy 3** — site vitrine statique, hébergé sur o2switch
- **PHP 8** — inscription à la bêta en double opt-in, liens signés HMAC
- **GitHub Actions** — CI (lint/typecheck/tests), pipeline de release déclenché par tag,
  vérification et déploiement du site
- **TypeScript** (mode strict) — typage complet
- **ESLint 9** (flat config, eslint-config-expo) — qualité de code
