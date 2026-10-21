---
title: vocab
description: Une application mobile de vocabulaire développée avec React Native et Expo.
lead: 'Une application mobile de gestion de vocabulaire pour constituer et réviser une collection de mots personnelle.'
layout: project.njk
repo: vocab
tags: ["projects_fr", "webdev", "star"]
order: 2
status: Test interne Google Play
tech: React Native · Expo · SQLite · EAS
websiteName: Vocab
websiteUrl: https://vocab.lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/vocab-app.webp"
    alt: "Vocab — écrans Accueil, Fiche du mot (mode sombre) et Révision"
    title: "Application"
  - src: "/images/projects/vocab-site.webp"
    alt: "Vocab — site vitrine : « Les beaux mots ne devraient pas s’oublier. »"
    title: "Site vitrine"
  - src: "/images/projects/vocab-emails.webp"
    alt: "Vocab — e-mails de confirmation et d’invitation à la bêta"
    title: "E-mails de la bêta"
builtWith:
  - name: 'EAS Build, Submit + Update'
    role: 'Builds cloud, upload Play Store et updates OTA vérifiées par fingerprint'
  - name: 'GitHub Actions'
    role: 'CI (lint/typecheck/tests), pipeline de release déclenché par tag, vérification et déploiement du site'
  - name: 'Sentry (<code>@sentry/react-native</code>)'
    role: 'Capture des crashs et erreurs, releases liées au CI/CD pour le suivi des régressions'
  - name: 'React Native / Expo SDK 57'
    role: 'Framework mobile cross-platform'
  - name: 'expo-router'
    role: 'Navigation basée sur le système de fichiers'
  - name: 'expo-sqlite'
    role: 'Stockage SQLite local (synchrone, offline-first)'
  - name: 'Zustand'
    role: 'Gestion d''état global légère'
  - name: 'react-native-reanimated v4'
    role: 'Animations et gestes'
  - name: 'TypeScript (mode strict)'
    role: 'Typage complet'
  - name: 'ESLint 9 (flat config, eslint-config-expo)'
    role: 'Qualité de code'
  - name: 'Eleventy 3'
    role: 'Site vitrine statique, hébergé sur o2switch'
  - name: 'PHP 8'
    role: 'Inscription à la bêta en double opt-in, liens signés HMAC'
permalink: /fr/projet/vocab/
---
{% from "partials/blocks.njk" import techList with context %}

Avec vocab, je voulais explorer tout le cycle de vie d'une application mobile, de sa conception à son déploiement, côté développement comme côté DevOps, en construisant au passage un outil utile au quotidien : enrichir mon vocabulaire.

- **Chercher** un mot, dont les définitions viennent du Wiktionnaire
- **Choisir** la définition qui correspond au contexte où on l'a rencontré
- **Sauvegarder** le mot dans sa collection, stockée sur le téléphone
- **Réviser** sa collection en flashcards
- Tout fonctionne **hors ligne**, sauf la recherche

{% include "partials/shots.njk" %}

## Architecture technique

<img src="/images/projects/vocab.svg" class="diagram" alt="Schéma d'architecture de Vocab : Wiktionnaire, SQLite, EAS Build, Play Store">

## DevOps

L'application est compilée dans le cloud par **EAS Build** : chaque build est signé, numéroté automatiquement, puis mis à disposition des testeurs sur Google Play.

**Intégration continue.** Chaque push sur la branche de développement passe par **GitHub Actions** : analyse du code, vérification des types et tests unitaires.

**Une release en deux temps.** Un tag de version déclenche le build, mais l'envoi vers Google Play se lance à la main. Sur un dépôt privé, GitHub ne propose pas d'approbation avant déploiement sans offre Enterprise : le déclenchement manuel joue ce rôle de validation humaine.

**Des mises à jour sans passer par le store.** Quand seul le JavaScript change, la nouvelle version part directement sur les téléphones. Le risque : envoyer du code qui attend un module natif absent de l'application installée. Pour l'éviter, un script maison compare l'empreinte du code natif à celle du dernier build et refuse de publier si elles diffèrent. Une commande de retour arrière permet de revenir à la version d'origine si une mise à jour pose problème.

**Le suivi des erreurs.** **Sentry** remonte les crashs en distinguant développement et production. Chaque release y est rattachée aux commits qui la composent et marquée comme déployée dès qu'elle atteint les testeurs : face à une régression, je sais quelle version et quel commit regarder.

**Le site vitrine** a son propre pipeline : validation du HTML, recherche de liens cassés et audit de performance avec des seuils minimaux. Il n'est déployé que si tout passe, puis vérifié en production.

## Frontend

Développé avec **React Native** et **Expo SDK 57**, avec un routage basé sur les fichiers (expo-router) et une architecture stricte en trois couches :

- **Service** — récupère et parse les définitions depuis une API externe à chaque recherche
- **SQLite** (`expo-sqlite`) — persiste les mots et définitions en local après sauvegarde
- **Zustand** — store en mémoire faisant le pont entre la base de données et l'UI

Chaque écran est sans état par conception. Toute la logique vit dans des hooks personnalisés pour que les composants se concentrent sur le rendu.

## Site vitrine

Le site [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com) est le point d'entrée de la bêta : on y découvre l'application et on s'inscrit pour rejoindre le test sur Google Play. L'inscription passe par une confirmation par e-mail, puis une invitation au test.

## Construit avec

{{ techList(builtWith) }}
