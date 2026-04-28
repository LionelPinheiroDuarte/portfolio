---
title: toolbox
description: A personal CLI toolkit built in Python, grouping automation commands under a single entry point.
layout: project.njk
repo: toolbox
tags: ["projects_en", "automatisation", "star"]
permalink: en/project/{{title}}/
---

# **Toolbox**
A unified, extensible command-line toolkit built in Python. Personal commands live under a single `x` entry point, designed to grow alongside my workflow.

## Overview

### Project Goal

A personal CLI that grows with my workflow. Each command lives in its own folder with its code and documentation. Commands cover daily needs: AI-powered error analysis, journal browsing, GitHub repo cloning, and cloud backup.

### Commands

| Command | Description |
|---------|-------------|
| `x wtf` | Analyze the last failed shell command via AI |
| `x notes` | Browse journal notes with syntax highlighting |
| `x repos` | Clone GitHub repos with optional filters |
| `x sync` | Sync Claude memory and journal notes to Nextcloud |

### Links
- GitHub: [Repository](https://github.com/LionelPinheiroDuarte/toolbox)

## How It Works

### `x sync` — Cloud backup to Nextcloud

Uploads Claude memory files and Markdown journal notes to Nextcloud via WebDAV. Credentials are stored in the system keyring — never in plaintext.

```bash
x sync --configure   # first-time setup: URL, username, app password
x sync               # sync everything
x sync --claude      # Claude memory files only
x sync --journal     # journal notes only
```

<img src="/images/toolbox-sync.gif" alt="x sync demo" style="width: 100%;" />

### `x wtf` — AI-powered error analysis

The shell captures every failed command automatically via `PROMPT_COMMAND`. When a command exits with a non-zero code, it writes the command and its stderr output to `/tmp/`. Then `x wtf` reads those files and sends them to an LLM for analysis via the OpenRouter API:

```bash
$ ls ~/non-existent-folder
ls: cannot access '/home/user/non-existent-folder': No such file or directory

$ x wtf
Command: ls ~/non-existent-folder
Error: ls: cannot access '...': No such file or directory

Analyzing...
[AI explanation of the error and how to fix it]
```

### `x notes` — Daily journal in the terminal

Opens today's journal note using `batcat` with Markdown syntax highlighting.

```bash
x notes           # open today's note
x notes --last    # open the most recent note
x notes --tasks   # open the tasks file
```

<img src="/images/toolbox-notes.gif" alt="x notes demo" style="width: 100%;" />

### `x repos` — GitHub repo cloning

Clones repositories from GitHub using the `gh` CLI, with filters by name or language.

```bash
x repos --single LionelPinheiroDuarte/toolbox   # clone one repo
x repos --language python                       # clone all Python repos
x repos --all                                   # clone everything
```

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
- [ ] `install.sh` — one-line installation script
