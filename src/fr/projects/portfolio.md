---
title: portfolio
description: Portfolio bilingue développé avec Eleventy, testé et déployé automatiquement sur o2switch.
lead: Un site personnel qui présente mes compétences et mes projets aux recruteurs.
layout: project.njk
repo: portfolio
tags: ["projects_fr", "webdev"]
order: 4
tech: Eleventy · Nunjucks · GitHub Actions
websiteName: portfolio
websiteUrl: https://lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/portfolio-home.webp"
    alt: "Portfolio — page d'accueil"
    title: "Page d'accueil"
  - src: "/images/projects/portfolio-project.webp"
    alt: "Portfolio — page projet"
    title: "Page projet"
builtWith:
  - name: GitHub Actions
    role: Build, tests et déploiement FTPS vers o2switch
  - name: Playwright
    role: Tests de bout en bout et audits d'accessibilité (axe) en thème clair et sombre
  - name: html-validate
    role: Validation du HTML généré
  - name: Eleventy
    role: Générateur de site statique ; le contenu est en Markdown, sans base de données
  - name: Nunjucks
    role: Templates, macros réutilisables (ligne de projet, frise, chiffres clés) et version FR / EN
  - name: LightningCSS
    role: Regroupe et minifie les feuilles de style au build
  - name: Matomo
    role: Mesure d'audience auto-hébergée, sans cookie
roadmap:
  - text: Site bilingue français / anglais
    done: true
  - text: Captures, schémas et vidéos de démonstration sur les pages projet
    done: true
  - text: Tester le build avant le déploiement, puis vérifier la production
  - text: Sommaire sur chaque page projet
permalink: /fr/projet/portfolio/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/shots.njk" %}

## Architecture technique

<img src="/images/projects/portfolio.svg" class="diagram" alt="Schéma d'architecture du portfolio">

## DevOps

**Un déploiement sans intervention.** Chaque push sur la branche principale déclenche **GitHub Actions** : le site est construit, puis envoyé sur mon hébergement o2switch en FTPS. Les identifiants restent dans les secrets du dépôt.

**Des tests qui regardent ce que voit un visiteur.** **Playwright** parcourt chaque page dans un vrai navigateur : navigation, bascule entre le français et l'anglais, liens internes, comportement des vidéos. Un audit d'accessibilité automatique passe sur toutes les pages, en thème clair comme en thème sombre, et le HTML généré est validé.

**Une erreur 404 dans la bonne langue.** Une adresse inconnue renvoie vers une page d'erreur en français ou en anglais selon la partie du site visitée, grâce à la configuration du serveur.

**Une mesure d'audience chez moi.** **Matomo** tourne sur mon propre hébergement, sans cookie : les statistiques ne partent chez aucun service tiers.

## Frontend

**Deux langues, un seul gabarit.** Chaque projet existe en deux fichiers Markdown, un par langue. L'en-tête de la page (titre, statut, liens, chiffres clés) est construit à partir de leurs métadonnées, et des macros réutilisables affichent la frise, les technologies ou la feuille de route : ajouter un projet revient à écrire du texte.

**Un seul fichier de styles.** Toutes les couleurs et tous les espacements vivent dans un fichier de variables, décliné en thème clair et sombre. Les feuilles de style sont regroupées et minifiées au moment du build.

**Une navigation fluide.** Le passage d'une page à l'autre se fait en fondu, sans JavaScript, et l'en-tête reste en place. Les captures et les schémas s'ouvrent en grand dans une visionneuse commune.

## Feuille de route

{{ checklist(roadmap) }}

## Construit avec

{{ techList(builtWith) }}
