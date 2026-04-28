---
title: toolbox
description: Un outil en ligne de commande personnel développé en Python, regroupant mes commandes d'automatisation sous un seul point d'entrée.
layout: project.njk
repo: toolbox
tags: ["projects_fr", "automatisation", "star"]
permalink: fr/projet/{{title}}/
---

# **Toolbox**
Un outil en ligne de commande unifié et extensible, développé en Python. Mes commandes personnelles sont regroupées sous un unique point d'entrée `x`, conçu pour s'enrichir avec le temps.

## Aperçu

### Objectif du projet

Un CLI personnel qui grandit avec mon workflow. Chaque commande vit dans son propre dossier avec son code et sa documentation. Les commandes couvrent mes besoins quotidiens : analyse d'erreurs par l'IA, navigation dans le journal, clonage de repos GitHub et sauvegarde cloud.

### Commandes

| Commande | Description |
|----------|-------------|
| `x wtf` | Analyser la dernière commande shell échouée via l'IA |
| `x notes` | Parcourir les notes de journal avec coloration syntaxique |
| `x repos` | Cloner des repos GitHub avec des filtres |
| `x sync` | Synchroniser la mémoire Claude et le journal vers Nextcloud |

### Liens
- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/toolbox)

## Comment ça fonctionne

### `x sync` — Sauvegarde cloud vers Nextcloud

Envoie les fichiers de mémoire Claude et les notes Markdown du journal vers Nextcloud via WebDAV. Les identifiants sont stockés dans le trousseau système — jamais en clair.

```bash
x sync --configure   # configuration initiale : URL, identifiant, app password
x sync               # tout synchroniser
x sync --claude      # fichiers Claude uniquement
x sync --journal     # notes de journal uniquement
```

<img src="/images/toolbox-sync.gif" alt="démo x sync" style="width: 100%;" />

### `x wtf` — Analyse d'erreurs par l'IA

Le shell capture automatiquement chaque commande échouée via `PROMPT_COMMAND`. Quand une commande se termine avec un code non nul, elle écrit la commande et sa sortie stderr dans `/tmp/`. Ensuite, `x wtf` lit ces fichiers et les envoie à un LLM pour analyse via l'API OpenRouter :

```bash
$ ls ~/dossier-inexistant
ls: cannot access '/home/user/dossier-inexistant': No such file or directory

$ x wtf
Commande : ls ~/dossier-inexistant
Erreur : ls: cannot access '...': No such file or directory

Analyse en cours...
[Explication de l'erreur et comment la corriger]
```

### `x notes` — Journal quotidien dans le terminal

Ouvre la note du jour avec `batcat` et une mise en couleur syntaxique Markdown.

```bash
x notes           # ouvrir la note du jour
x notes --last    # ouvrir la note la plus récente
x notes --tasks   # ouvrir le fichier de tâches
```

<img src="/images/toolbox-notes.gif" alt="démo x notes" style="width: 100%;" />

### `x repos` — Clonage de repos GitHub

Clone des dépôts depuis GitHub via le CLI `gh`, avec des filtres par nom ou par langage.

```bash
x repos --single LionelPinheiroDuarte/toolbox   # cloner un repo
x repos --language python                       # cloner tous les repos Python
x repos --all                                   # tout cloner
```

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
