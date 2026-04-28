---
title: toolbox
description: Un outil en ligne de commande personnel développé en Python, regroupant mes commandes d'automatisation sous un seul point d'entrée.
layout: project.njk
repo: toolbox
tags: ["projects_fr", "automatisation", "star"]
permalink: fr/projet/{{title}}/
---

# **Toolbox**
Un CLI personnel qui grandit avec mon workflow — couvrant l'analyse d'erreurs par l'IA, la navigation dans le journal, le clonage de repos GitHub et la sauvegarde cloud.

## Aperçu

| Commande | Description |
|----------|-------------|
| `x wtf` | Analyser la dernière commande shell échouée via l'IA |
| `x notes` | Parcourir les notes de journal avec coloration syntaxique |
| `x repos` | Cloner des repos GitHub avec des filtres |
| `x sync` | Synchroniser la mémoire Claude et le journal vers Nextcloud |

- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/toolbox)

## Comment ça fonctionne

### `x sync` — Sauvegarde cloud vers Nextcloud

Envoie les fichiers de mémoire Claude et les notes Markdown du journal vers Nextcloud via WebDAV. Les identifiants sont stockés dans le trousseau système — jamais en clair.

<img src="/images/toolbox-sync.gif" alt="démo x sync" style="width: 100%;" />

## Construit avec

- **Python 3.8+** — langage principal
- **Click** — framework CLI pour les commandes et la gestion des arguments
- **API OpenRouter** — backend IA pour `x wtf`
- **requests + keyring** — uploads WebDAV et stockage sécurisé des identifiants pour `x sync`
- **batcat** — affichage des notes avec coloration syntaxique pour `x notes`
- **gh CLI** — clonage de repos GitHub pour `x repos`
- **Gruvbox Dark** — thème de couleurs terminal pour toutes les commandes

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

- [x] `x wtf` — analyse d'erreurs par l'IA
- [x] `x notes` — journal quotidien dans le terminal
- [x] `x repos` — clonage de repos GitHub avec filtres
- [x] `x sync` — synchronisation Claude et journal vers Nextcloud
- [ ] `x history` — naviguer dans les erreurs passées
- [ ] `install.sh` — script d'installation en une ligne
