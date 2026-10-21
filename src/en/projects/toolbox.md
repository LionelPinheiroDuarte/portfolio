---
title: toolbox
description: A personal command-line tool in Python that groups my everyday automations under a single command.
lead: 'A personal command-line tool: AI-assisted debugging, journal, GitHub repos, backup and machine setup.'
layout: project.njk
repo: toolbox
tags: ["projects_en", "automatisation", "star"]
order: 3
tech: Python · Click · Ansible · Nextcloud
builtWith:
  - name: 'Python 3.8+'
    role: 'Main language'
  - name: 'Click'
    role: 'CLI framework for commands and argument parsing'
  - name: 'OpenRouter API'
    role: 'AI backend for <code>x wtf</code>'
  - name: 'batcat'
    role: 'Syntax-highlighted note viewing for <code>x notes</code>'
  - name: 'gh CLI'
    role: 'GitHub repo cloning for <code>x repos clone</code>'
  - name: 'requests + keyring'
    role: 'WebDAV uploads and secure credential storage for <code>x sync</code>'
  - name: 'Ansible'
    role: 'Machine provisioning from the dotfiles for <code>x setup</code>'
  - name: 'Gruvbox Dark'
    role: 'Terminal color theme across all commands'
roadmap:
  - text: '<code>x wtf</code> — AI-powered error analysis'
    done: true
  - text: '<code>x notes</code> — daily journal in the terminal'
    done: true
  - text: '<code>x repos</code> — clone, pull and push GitHub repos, one or all'
    done: true
  - text: '<code>x sync</code> — backup and restore to Nextcloud'
    done: true
  - text: '<code>x setup</code> — set up a machine from the dotfiles'
    done: true
  - text: '<code>install.sh</code> — one-line installation script'
    done: true
  - text: '<code>x history</code> — browse past errors'
permalink: /en/project/toolbox/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

Whenever a task came up often enough to become a chore, it became a subcommand of `x`.

## What Each Command Solves

**Understanding an error without leaving the terminal.** When a command fails, my shell records the command and its error message. `x wtf` passes them to a language model through OpenRouter, which explains why it failed and how to fix it.

**The journal at hand.** `x notes` shows today's note, the latest entry or the task list, with syntax highlighting.

<video class="demo" src="/images/toolbox-notes.mp4" poster="/images/toolbox-notes-poster.webp" width="920" height="540" controls muted loop playsinline preload="none" data-autoplay aria-label="Demo of x notes in the terminal"></video>

**Keeping all my repos up to date.** With a dozen projects, checking one by one what is left to pull or push quickly gets tedious. `x repos` clones, updates or pushes one repo, or all of them at once. Updating never merges anything on its own: if a branch has diverged, it says so and leaves the call to me. Before pushing everything, the pending commits are listed and a confirmation is required, so forgotten work never gets published by accident.

<video class="demo" src="/images/toolbox-repos.mp4" poster="/images/toolbox-repos-poster.webp" width="920" height="540" controls muted loop playsinline preload="none" data-autoplay aria-label="Demo of x repos pull and push in the terminal"></video>

**Backing up what is not in Git.** Claude's memory and skills, my journal and my CV project live outside any repo. `x sync` sends them to my Nextcloud space, and the credentials stay in the system keyring, never in plain text. `x sync --restore` goes the other way and puts each file back in the right place, even when the username differs from one machine to the next.

<video class="demo" src="/images/toolbox-sync.mp4" poster="/images/toolbox-sync-poster.webp" width="800" height="400" controls muted loop playsinline preload="none" data-autoplay aria-label="Demo of x sync in the terminal"></video>

**Setting up a new machine.** `x setup` fetches my dotfiles and runs the Ansible playbook that installs and configures the whole environment. The `--short` option sticks to the user level, without admin rights.

## Roadmap

{{ checklist(roadmap) }}

## Built With

{{ techList(builtWith) }}
