---
title: toolbox
description: A personal CLI toolkit built in Python, grouping automation commands under a single entry point.
lead: 'A personal CLI that grows with my workflow — covering AI-powered error analysis, journal browsing, GitHub repo cloning, and cloud backup.'
layout: project.njk
repo: toolbox
tags: ["projects_en", "automatisation", "star"]
order: 3
tech: Python · CLI · Nextcloud
builtWith:
  - name: 'Python 3.8+'
    role: 'Main language'
  - name: 'Click'
    role: 'CLI framework for commands and argument parsing'
  - name: 'OpenRouter API'
    role: 'AI backend for <code>x wtf</code>'
  - name: 'requests + keyring'
    role: 'WebDAV uploads and secure credential storage for <code>x sync</code>'
  - name: 'batcat'
    role: 'Syntax-highlighted note viewing for <code>x notes</code>'
  - name: 'gh CLI'
    role: 'GitHub repo cloning for <code>x repos clone</code>'
  - name: 'Gruvbox Dark'
    role: 'Terminal color theme across all commands'
roadmap:
  - text: '<code>x wtf</code> — AI-powered error analysis'
    done: true
  - text: '<code>x notes</code> — daily journal in the terminal'
    done: true
  - text: '<code>x repos</code> — clone, pull and push GitHub repos, one or all'
    done: true
  - text: '<code>x sync</code> — sync Claude memory, skills, journal notes and the CV project to Nextcloud'
    done: true
  - text: '<code>x history</code> — browse past errors'
  - text: '<code>install.sh</code> — one-line installation script'
    done: true
permalink: /en/project/toolbox/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

## Overview

| Command | Description |
|---------|-------------|
| `x wtf` | Analyze the last failed shell command via AI |
| `x notes` | Browse journal notes with syntax highlighting |
| `x repos` | Clone, pull (fast-forward only) or push my GitHub repos — one or all, with a preview before pushing |
| `x sync` | Sync Claude memory, skills, journal notes and the CV project to Nextcloud |
| `x setup` | Provision a machine from dotfiles + Ansible (`--short` for user-level only) |


## How It Works

### `x sync` — Cloud backup and restore via Nextcloud

Uploads Claude memory files, Markdown journal notes and the CV project (profile data, LaTeX template, generated PDFs and the CV generation agents) to Nextcloud via WebDAV. Credentials are stored in the system keyring — never in plaintext.

`x sync --restore` reverses the flow: downloads files from Nextcloud and places them in the correct local paths, automatically adjusted to the current machine's username. Useful when setting up a new machine.

<video class="demo" src="/images/toolbox-sync.mp4" poster="/images/toolbox-sync-poster.webp" width="800" height="400" controls muted loop playsinline preload="none" data-autoplay aria-label="x sync demo in the terminal"></video>

## Built With

{{ techList(builtWith) }}

## Project Structure

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

## Roadmap

{{ checklist(roadmap) }}
