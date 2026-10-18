---
title: toolbox
description: Un outil en ligne de commande personnel développé en Python, regroupant mes commandes d'automatisation sous un seul point d'entrée.
lead: 'Un CLI personnel qui grandit avec mon workflow — couvrant l''analyse d''erreurs par l''IA, la navigation dans le journal, le clonage de repos GitHub et la sauvegarde cloud.'
layout: project.njk
repo: toolbox
tags: ["projects_fr", "automatisation", "star"]
order: 3
tech: Python · CLI · Nextcloud
builtWith:
  - name: 'Python 3.8+'
    role: 'Langage principal'
  - name: 'Click'
    role: 'Framework CLI pour les commandes et la gestion des arguments'
  - name: 'API OpenRouter'
    role: 'Backend IA pour <code>x wtf</code>'
  - name: 'requests + keyring'
    role: 'Uploads WebDAV et stockage sécurisé des identifiants pour <code>x sync</code>'
  - name: 'batcat'
    role: 'Affichage des notes avec coloration syntaxique pour <code>x notes</code>'
  - name: 'gh CLI'
    role: 'Clonage de repos GitHub pour <code>x repos</code>'
  - name: 'Gruvbox Dark'
    role: 'Thème de couleurs terminal pour toutes les commandes'
roadmap:
  - text: '<code>x wtf</code> — analyse d''erreurs par l''IA'
    done: true
  - text: '<code>x notes</code> — journal quotidien dans le terminal'
    done: true
  - text: '<code>x repos</code> — clonage de repos GitHub avec filtres'
    done: true
  - text: '<code>x sync</code> — synchronisation Claude, journal et projet CV vers Nextcloud'
    done: true
  - text: '<code>x history</code> — naviguer dans les erreurs passées'
  - text: '<code>install.sh</code> — script d''installation en une ligne'
    done: true
permalink: /fr/projet/toolbox/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

## Aperçu

| Commande | Description |
|----------|-------------|
| `x wtf` | Analyser la dernière commande shell échouée via l'IA |
| `x notes` | Parcourir les notes de journal avec coloration syntaxique |
| `x repos` | Cloner des repos GitHub avec des filtres |
| `x sync` | Synchroniser la mémoire Claude, les skills, le journal et le projet CV vers Nextcloud |
| `x setup` | Provisionner une machine depuis les dotfiles + Ansible (`--short` pour le niveau utilisateur uniquement) |
| `x dotfiles pull` | Récupérer les derniers changements du repo dotfiles |


## Comment ça fonctionne

### `x sync` — Sauvegarde et restauration cloud via Nextcloud

Envoie les fichiers de mémoire Claude, les notes Markdown du journal et le projet CV (données de profil, template LaTeX, PDF générés et agents de génération de CV) vers Nextcloud via WebDAV. Les identifiants sont stockés dans le trousseau système — jamais en clair.

`x sync --restore` inverse le flux : télécharge les fichiers depuis Nextcloud et les place aux bons endroits localement, en s'adaptant automatiquement au nom d'utilisateur de la machine cible. Utile pour configurer un nouvel ordinateur.

<video class="demo" src="/images/toolbox-sync.mp4" poster="/images/toolbox-sync-poster.webp" width="800" height="400" controls muted loop playsinline preload="none" data-autoplay aria-label="Démonstration de x sync dans le terminal"></video>

## Construit avec

{{ techList(builtWith) }}

## Structure du projet

```
toolbox/
├── x/
│   ├── main.py
│   ├── commands/
│   │   ├── wtf/        # __init__.py + README.md
│   │   ├── notes/      # __init__.py + README.md
│   │   ├── repos/      # __init__.py + README.md
│   │   └── sync/       # __init__.py + README.md
│   └── utils/
│       ├── ai.py
│       └── colors.py
├── assets/
│   ├── notes.gif
│   └── sync.gif
└── pyproject.toml
```

## Feuille de route

{{ checklist(roadmap) }}
