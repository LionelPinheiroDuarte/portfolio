---
title: brain
description: Site où je rassemble mes notes, développé avec MkDocs.
lead: Le site où je rassemble mes notes techniques, développé avec MkDocs et publié sur <span lang="en">GitHub Pages</span>.
layout: project.njk
repo: brain
tags: ["projects_fr", "webdev"]
order: 5
tech: MkDocs · Material
websiteName: Brain
websiteUrl: https://lionelpinheiroduarte.github.io/brain/index.en/
screenshots:
  - src: "/images/projects/brain-home.webp"
    alt: "Brain — page d'accueil"
    title: "Page d'accueil"
  - src: "/images/projects/brain-note.webp"
    alt: "Brain — page de note"
    title: "Page de note"
builtWith:
  - name: MkDocs
    url: https://www.mkdocs.org/
    urlLabel: mkdocs.org
    pros:
      - Déploiement facile avec <span lang="en">GitHub Pages</span>.
      - 'Des fichiers <span lang="en">Markdown</span> : pas de base de données et un contenu déjà formaté.'
    cons:
      - Le temps de build semble augmenter fortement au-delà d'un certain nombre de pages.
  - name: Material
    url: https://squidfunk.github.io/mkdocs-material/
    urlLabel: mkdocs-material
    pros:
      - De nombreuses extensions, dont la recherche et le multilingue.
roadmap:
  - text: Avoir un site multilingue.
    done: true
permalink: /fr/projet/brain/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/shots.njk" %}

## Aperçu

- Un lieu unique où j'agrège mes notes.
- Un terrain pour exercer ma pratique de la documentation.

## Construit avec

{{ techList(builtWith) }}

## Feuille de route

{{ checklist(roadmap) }}
