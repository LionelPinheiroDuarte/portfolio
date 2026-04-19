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

Un CLI personnel qui s'enrichit avec le temps. Deux commandes disponibles : `x wtf` explique les erreurs du terminal via l'IA, `x notes` ouvre l'entrée du jour de mon journal personnel directement dans le terminal.

### Liens
- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/toolbox)

## Comment ça fonctionne

### `x wtf` — Analyse d'erreurs par l'IA

Le shell capture automatiquement chaque commande échouée via `PROMPT_COMMAND`. Quand une commande se termine avec un code non nul, elle écrit la commande et sa sortie stderr dans `/tmp/` :

```bash
# Intercepter toute commande échouée
log_output() {
    local exit_code=$?
    if [ $exit_code -ne 0 ]; then
        echo "$last_cmd" > /tmp/last_command.txt
        eval "$last_cmd" 2>/tmp/last_error.txt
    fi
}
PROMPT_COMMAND='log_output'
```

Ensuite, `x wtf` lit ces fichiers et les envoie à un LLM pour analyse via l'API OpenRouter (modèle `openrouter/auto`) :

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

Ouvre la note du jour avec `batcat` et une mise en couleur syntaxique. Supporte deux options :

```bash
$ x notes           # Ouvrir la note du jour
$ x notes --last    # Ouvrir la note la plus récente
$ x notes --tasks   # Ouvrir la note des tâches
```

<img src="/images/toolbox-notes.gif" alt="x notes demo" style="width: 100%;" />

## Construit avec

- **Python 3.8+** — langage principal
- **Click** — framework CLI pour les commandes et la gestion des arguments
- **API OpenRouter** — backend IA avec le modèle `openrouter/auto`
- **batcat** — affichage des notes avec coloration syntaxique (`x notes`)
- **Gruvbox Dark** — thème de couleurs terminal pour un affichage formaté
- **pyproject.toml** — packaging Python moderne

## Prérequis

- Variable d'environnement `OPENROUTER_API_KEY` — requise pour `x wtf`
- `batcat` installé — requis pour `x notes`

## Structure du projet

```
toolbox/
├── x/
│   ├── main.py           # Point d'entrée du CLI
│   ├── commands/
│   │   ├── wtf.py        # Capture d'erreur et analyse IA
│   │   ├── notes.py      # Commande de journal quotidien
│   │   └── hello.py      # Commande de test
│   └── utils/
│       ├── ai.py         # Wrapper d'appel LLM (OpenRouter)
│       └── colors.py     # Formatage couleur du terminal
├── assets/
│   └── notes.gif         # Démo de x notes
└── pyproject.toml
```

## Feuille de route

- [x] `x wtf` — analyse d'erreurs par l'IA
- [x] `x notes` — journal quotidien dans le terminal
- [ ] `x explain <commande>` — expliquer une commande shell avant de l'exécuter
- [ ] `install.sh` — script d'installation en une ligne
