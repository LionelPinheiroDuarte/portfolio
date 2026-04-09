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

Construire un CLI personnel qui s'enrichit au fil du temps, en regroupant des commandes d'automatisation utiles sous un unique point d'entrée `x`. La première commande, `wtf`, résout une friction quotidienne réelle : quand une commande échoue dans le terminal, au lieu de chercher l'erreur manuellement, il suffit de lancer `x wtf`.

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

Ensuite, `x wtf` lit ces fichiers et les envoie à un LLM pour analyse :

```bash
$ ls ~/dossier-inexistant
ls: cannot access '/home/user/dossier-inexistant': No such file or directory

$ x wtf
Commande : ls ~/dossier-inexistant
Erreur : ls: cannot access '...': No such file or directory

Analyse en cours...
[Explication de l'erreur et comment la corriger]
```

## Construit avec

- **Python 3.8+** — langage principal
- **Click** — framework CLI pour les commandes et la gestion des arguments
- **OpenAI SDK** — communication avec le LLM via l'API OpenRouter
- **Gruvbox Dark** — thème de couleurs terminal pour un affichage formaté
- **pyproject.toml** — packaging Python moderne

## Structure du projet

```
toolbox/
├── x/
│   ├── main.py           # Point d'entrée du CLI
│   ├── commands/
│   │   ├── wtf.py        # Capture d'erreur et analyse IA
│   │   └── hello.py      # Commande de test
│   └── utils/
│       ├── ai.py         # Wrapper d'appel LLM (OpenRouter)
│       └── colors.py     # Formatage couleur du terminal
└── pyproject.toml
```

## Idées d'améliorations

- [ ] Migrer vers l'API Claude
- [ ] `x explain <commande>` — expliquer une commande shell avant de l'exécuter
- [ ] `install.sh` — script d'installation en une ligne
