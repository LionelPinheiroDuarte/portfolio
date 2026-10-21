---
title: brain
description: Mes notes techniques rassemblées dans un site MkDocs, publié sur GitHub Pages.
lead: Un site où je rassemble mes notes techniques, construit avec MkDocs et publié sur <span lang="en">GitHub Pages</span>.
layout: project.njk
repo: brain
tags: ["projects_fr", "webdev"]
order: 5
tech: MkDocs · Material · GitHub Actions
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
    role: Générateur de site statique à partir de fichiers Markdown
  - name: Material for MkDocs
    role: Thème, recherche intégrée et navigation par onglets
  - name: <span lang="en">GitHub Pages</span>
    role: Hébergement du site
  - name: GitHub Actions
    role: Publication automatique à chaque push
roadmap:
  - text: Notes DevOps (Terraform, Docker, Ansible, CI/CD, observabilité)
    done: true
  - text: Publication automatique à chaque push avec GitHub Actions
    done: true
  - text: Notes Kubernetes, au fil de la phase 3 d'infra-lab
permalink: /fr/projet/brain/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

Ce que j'apprends en construisant mes projets finit ici, écrit au moment où je rencontre le problème.

{% include "partials/shots.njk" %}

## Ce que j'y documente

**Des notes nées des projets.** Les pages sur Docker et Terraform viennent d'infra-lab, celles sur les builds Expo et le suivi des erreurs avec Sentry viennent de vocab. Elles gardent la trace de ce qui a bloqué et de la façon dont je l'ai résolu.

**Retrouver une réponse en quelques secondes.** Les notes sont rangées par domaine (Linux, DevOps, outils), et la recherche intégrée retrouve une commande ou un concept sans que je doive me souvenir où je l'ai noté.

**Publié dès qu'une note est écrite.** Le site était publié à la main, et cette étape avait été oubliée pendant des mois : plusieurs notes n'étaient pas en ligne. Désormais, **GitHub Actions** reconstruit et publie le site à chaque push.

**Écrire pour comprendre.** Rédiger une note m'oblige à reformuler ce que je viens d'apprendre. Si je n'arrive pas à l'expliquer simplement, c'est que je ne l'ai pas encore compris.

## Feuille de route

{{ checklist(roadmap) }}

## Construit avec

{{ techList(builtWith) }}
