---
title: toolbox
description: A personal CLI toolkit powered by AI. The `wtf` command captures failed terminal commands and explains them using an LLM.
layout: project.njk
repo: toolbox
tags: ["projects_en", "automatisation", "star"]
permalink: en/project/{{title}}/
---

# **Toolbox**
A unified, extensible command-line toolkit built in Python. All personal commands live under a single entry point — starting with `wtf`, which automatically captures and explains the last failed terminal command using AI.

## Overview

### Project Goal

Build a personal CLI that grows over time, grouping useful automation commands under a single `x` entry point. The first command, `wtf`, solves a real daily friction: when a terminal command fails, instead of manually searching the error, you just run `x wtf`.

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

Then `x wtf` reads those files and sends them to an LLM for analysis:

```bash
$ ls ~/non-existent-folder
ls: cannot access '/home/user/non-existent-folder': No such file or directory

$ x wtf
Command: ls ~/non-existent-folder
Error: ls: cannot access '...': No such file or directory

Analyzing...
[AI explanation of the error and how to fix it]
```

## Built With

- **Python 3.8+** — main language
- **Click** — CLI framework for commands and argument parsing
- **OpenAI SDK** — communicates with the LLM via OpenRouter API
- **Gruvbox Dark** — terminal color theme for formatted output
- **pyproject.toml** — modern Python packaging

## Project Structure

```
toolbox/
├── x/
│   ├── main.py           # CLI entry point
│   ├── commands/
│   │   ├── wtf.py        # Error capture and AI analysis
│   │   └── hello.py      # Greeting command
│   └── utils/
│       ├── ai.py         # LLM query wrapper (OpenRouter)
│       └── colors.py     # Terminal color formatting
└── pyproject.toml
```

## Ideas for Improvement

- [ ] Switch AI backend to Claude API
- [ ] `x explain <command>` — explain any shell command before running it
- [ ] `install.sh` — one-line installation script
