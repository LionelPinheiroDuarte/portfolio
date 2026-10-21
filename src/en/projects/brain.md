---
title: brain
description: My technical notes gathered in an MkDocs site, published on GitHub Pages.
lead: A site where I gather my technical notes, built with MkDocs and published on GitHub Pages.
layout: project.njk
repo: brain
tags: ["projects_en", "webdev"]
order: 5
tech: MkDocs · Material · GitHub Actions
websiteName: Brain
websiteUrl: https://lionelpinheiroduarte.github.io/brain/index.en/
screenshots:
  - src: "/images/projects/brain-home.webp"
    alt: "Brain — home page"
    title: "Home page"
  - src: "/images/projects/brain-note.webp"
    alt: "Brain — note page"
    title: "Note page"
builtWith:
  - name: MkDocs
    role: Static site generator from Markdown files
  - name: Material for MkDocs
    role: Theme, built-in search and tabbed navigation
  - name: GitHub Pages
    role: Site hosting
  - name: GitHub Actions
    role: Automatic publishing on every push
roadmap:
  - text: DevOps notes (Terraform, Docker, Ansible, CI/CD, observability)
    done: true
  - text: Automatic publishing on every push with GitHub Actions
    done: true
  - text: Kubernetes notes, along with infra-lab's Phase 3
permalink: /en/project/brain/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

What I learn while building my projects ends up here, written down when I run into the problem.

{% include "partials/shots.njk" %}

## What I Document There

**Notes born from projects.** The Docker and Terraform pages come from infra-lab, the ones on Expo builds and error tracking with Sentry come from vocab. They keep track of what got in the way and how I solved it.

**Finding an answer in seconds.** Notes are organised by area (Linux, DevOps, tools), and the built-in search finds a command or a concept without me having to remember where I wrote it down.

**Published as soon as a note is written.** The site used to be published by hand, and that step had been forgotten for months: several notes were not online. Now **GitHub Actions** rebuilds and publishes the site on every push.

**Writing to understand.** Writing a note forces me to rephrase what I have just learned. If I can't explain it simply, I haven't understood it yet.

## Roadmap

{{ checklist(roadmap) }}

## Built With

{{ techList(builtWith) }}
