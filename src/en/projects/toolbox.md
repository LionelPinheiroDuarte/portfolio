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

A personal CLI that grows alongside my workflow. Two commands so far: `x wtf` explains failed terminal commands via AI, `x notes` opens today's entry from my personal journal directly in the terminal.

### Links
- GitHub: [Repository](https://github.com/LionelPinheiroDuarte/toolbox)

## How It Works

### `x wtf` — AI-powered error analysis

The shell captures every failed command automatically via `PROMPT_COMMAND`. When a command exits with a non-zero code, it writes the command and its stderr output to `/tmp/`:

```bash
# Intercept any failed command
log_output() {
    local exit_code=$?
    if [ $exit_code -ne 0 ]; then
        echo "$last_cmd" > /tmp/last_command.txt
        eval "$last_cmd" 2>/tmp/last_error.txt
    fi
}
PROMPT_COMMAND='log_output'
```

Then `x wtf` reads those files and sends them to an LLM for analysis via the OpenRouter API (`openrouter/auto` model):

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

Opens today's journal note using `batcat` with syntax highlighting. Supports two flags:

```bash
$ x notes           # Open today's note
$ x notes --last    # Open the most recent note
$ x notes --tasks   # Open the tasks note
```

<img src="/images/toolbox-notes.gif" alt="x notes demo" style="width: 100%;" />

## Built With

- **Python 3.8+** — main language
- **Click** — CLI framework for commands and argument parsing
- **OpenRouter API** — AI backend using `openrouter/auto` model
- **batcat** — syntax-highlighted note viewing (`x notes`)
- **Gruvbox Dark** — terminal color theme for formatted output
- **pyproject.toml** — modern Python packaging

## Requirements

- `OPENROUTER_API_KEY` env var — required for `x wtf`
- `batcat` installed — required for `x notes`

## Project Structure

```
toolbox/
├── x/
│   ├── main.py           # CLI entry point
│   ├── commands/
│   │   ├── wtf.py        # Error capture and AI analysis
│   │   ├── notes.py      # Daily journal command
│   │   └── hello.py      # Greeting command
│   └── utils/
│       ├── ai.py         # LLM query wrapper (OpenRouter)
│       └── colors.py     # Terminal color formatting
├── assets/
│   └── notes.gif         # Demo of x notes
└── pyproject.toml
```

## Roadmap

- [x] `x wtf` — AI-powered error analysis
- [x] `x notes` — daily journal in the terminal
- [ ] `x explain <command>` — explain any shell command before running it
- [ ] `install.sh` — one-line installation script
