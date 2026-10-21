---
title: toolbox
description: Un outil en ligne de commande personnel en Python, qui regroupe mes automatisations du quotidien sous une seule commande.
lead: 'Un outil en ligne de commande personnel : aide au débogage par l''IA, journal, dépôts GitHub, sauvegarde et installation de machine.'
layout: project.njk
repo: toolbox
tags: ["projects_fr", "automatisation", "star"]
order: 3
tech: Python · Click · Ansible · Nextcloud
builtWith:
  - name: 'Python 3.8+'
    role: 'Langage principal'
  - name: 'Click'
    role: 'Framework CLI pour les commandes et la gestion des arguments'
  - name: 'gh CLI'
    role: 'Clonage de repos GitHub pour <code>x repos clone</code>'
  - name: 'requests + keyring'
    role: 'Uploads WebDAV et stockage sécurisé des identifiants pour <code>x sync</code>'
  - name: 'Ansible'
    role: 'Provisionnement de machine depuis les dotfiles pour <code>x setup</code>'
roadmap:
  - text: '<code>x wtf</code> — analyse d''erreurs par l''IA'
    done: true
  - text: '<code>x notes</code> — journal quotidien dans le terminal'
    done: true
  - text: '<code>x repos</code> — clone, pull et push des repos GitHub, un seul ou tous'
    done: true
  - text: '<code>x sync</code> — sauvegarde et restauration vers Nextcloud'
    done: true
  - text: '<code>x setup</code> — installation d''une machine depuis les dotfiles'
    done: true
  - text: '<code>install.sh</code> — script d''installation en une ligne'
    done: true
  - text: '<code>x history</code> — naviguer dans les erreurs passées'
permalink: /fr/projet/toolbox/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

Chaque fois qu'une tâche revenait assez souvent pour devenir pénible, elle est devenue une sous-commande de `x`.

## Ce que résout chaque commande

**Comprendre une erreur sans quitter le terminal.** Quand une commande échoue, mon shell enregistre la commande et son message d'erreur. `x wtf` les transmet à un modèle de langage via OpenRouter, qui explique pourquoi elle a échoué et comment la corriger.

**Le journal à portée de main.** `x notes` affiche la note du jour, la dernière entrée ou la liste des tâches, avec coloration syntaxique.

<video class="demo" src="/images/toolbox-notes.mp4" poster="/images/toolbox-notes-poster.webp" width="920" height="540" controls muted loop playsinline preload="none" data-autoplay aria-label="Démonstration de x notes dans le terminal"></video>

**Garder tous mes dépôts à jour.** Avec une dizaine de projets, vérifier un par un ce qu'il reste à récupérer ou à pousser devient vite fastidieux. `x repos` clone, met à jour ou pousse un dépôt, ou tous à la fois. La mise à jour ne fusionne jamais rien d'elle-même : si une branche a divergé, elle le signale et me laisse trancher. Avant de tout pousser, la liste des commits en attente s'affiche et une confirmation est demandée, pour ne pas publier un travail oublié.

<video class="demo" src="/images/toolbox-repos.mp4" poster="/images/toolbox-repos-poster.webp" width="920" height="540" controls muted loop playsinline preload="none" data-autoplay aria-label="Démonstration de x repos pull et push dans le terminal"></video>

**Sauvegarder ce qui n'est pas dans Git.** La mémoire et les skills de Claude, mon journal et mon projet de CV vivent hors de tout dépôt. `x sync` les envoie sur mon espace Nextcloud, et les identifiants restent dans le trousseau du système, jamais en clair. `x sync --restore` fait le chemin inverse et replace chaque fichier au bon endroit, même si le nom d'utilisateur change d'une machine à l'autre.

<video class="demo" src="/images/toolbox-sync.mp4" poster="/images/toolbox-sync-poster.webp" width="800" height="400" controls muted loop playsinline preload="none" data-autoplay aria-label="Démonstration de x sync dans le terminal"></video>

**Préparer une nouvelle machine.** `x setup` récupère mes dotfiles et lance le playbook Ansible qui installe et configure tout l'environnement. L'option `--short` s'en tient au niveau utilisateur, sans droits administrateur.

## Feuille de route

{{ checklist(roadmap) }}

## Construit avec

{{ techList(builtWith) }}
