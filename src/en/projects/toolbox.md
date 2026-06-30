---
title: toolbox
description: A personal CLI toolkit built in Python, grouping automation commands under a single entry point.
layout: project.njk
repo: toolbox
tags: ["projects_en", "automatisation", "star"]
permalink: en/project/{{title}}/
---

# **Toolbox**
A personal CLI that grows with my workflow — covering AI-powered error analysis, journal browsing, GitHub repo cloning, and cloud backup.

## Overview

| Command | Description |
|---------|-------------|
| `x wtf` | Analyze the last failed shell command via AI |
| `x notes` | Browse journal notes with syntax highlighting |
| `x repos` | Clone GitHub repos with optional filters |
| `x sync` | Sync Claude memory and journal notes to Nextcloud |

## Links

- GitHub: [Repository](https://github.com/LionelPinheiroDuarte/toolbox)

## How It Works

### `x sync` — Cloud backup and restore via Nextcloud

Uploads Claude memory files and Markdown journal notes to Nextcloud via WebDAV. Credentials are stored in the system keyring — never in plaintext.

`x sync --restore` reverses the flow: downloads files from Nextcloud and places them in the correct local paths, automatically adjusted to the current machine's username. Useful when setting up a new machine.

<img src="/images/toolbox-sync.gif" alt="x sync demo" style="width: 100%;" />

## Built With

- **Python 3.8+** — main language
- **Click** — CLI framework for commands and argument parsing
- **OpenRouter API** — AI backend for `x wtf`
- **requests + keyring** — WebDAV uploads and secure credential storage for `x sync`
- **batcat** — syntax-highlighted note viewing for `x notes`
- **gh CLI** — GitHub repo cloning for `x repos`
- **Gruvbox Dark** — terminal color theme across all commands

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

- [x] `x wtf` — AI-powered error analysis
- [x] `x notes` — daily journal in the terminal
- [x] `x repos` — clone GitHub repos with filters
- [x] `x sync` — sync Claude memory and journal notes to Nextcloud
- [ ] `x history` — browse past errors
- [x] `install.sh` — one-line installation script
