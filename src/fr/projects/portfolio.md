---
title: portfolio
description: Portfolio responsive multilingue développé avec Eleventy et hébergé sur o2switch, mettant en valeur mes projets et compétences.
lead: Le site que vous lisez — il présente mes compétences et mes projets auprès des recruteurs, en français et en anglais.
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
  - name: Eleventy
    role: Générateur de site statique ; le contenu est en Markdown, sans base de données
  - name: Nunjucks
    role: Templates, macros réutilisables (ligne de projet, frise, chiffres clés) et version FR / EN
  - name: LightningCSS
    role: Regroupe et minifie les feuilles de style au build
  - name: Playwright
    role: Tests de bout en bout (navigation, contenu, liens de langue)
  - name: GitHub Actions
    role: Build, tests et déploiement FTPS vers o2switch
  - name: Matomo
    role: Mesure d'audience auto-hébergée, sans cookie
roadmap:
  - text: Avoir un site multilingue.
    done: true
  - text: Intégrer des images, vidéos et GIF pour les projets.
    done: true
  - text: Avoir un sommaire pour chaque projet.
permalink: /fr/projet/portfolio/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/shots.njk" %}

## Aperçu

- Une page d'accueil qui présente mon profil, ma stack et mes projets phares.
- Une page qui liste tous mes projets, avec une page détaillée pour chacun.

## Architecture technique

<img src="/images/projects/portfolio.svg" class="diagram" alt="Schéma d'architecture du portfolio">

## Construit avec

{{ techList(builtWith) }}

## Feuille de route

{{ checklist(roadmap) }}
