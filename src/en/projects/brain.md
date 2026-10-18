---
title: brain
description: A space where I keep my notes, developed with MkDocs.
lead: The site where I gather my technical notes, built with MkDocs and published on GitHub Pages.
layout: project.njk
repo: brain
tags: ["projects_en", "webdev"]
order: 5
tech: MkDocs · Material
websiteName: Brain
websiteUrl: https://lionelpinheiroduarte.github.io/brain/index.en/
screenshots:
  - src: "/images/projects/brain-home.webp"
    alt: "Brain — home page"
  - src: "/images/projects/brain-note.webp"
    alt: "Brain — note page"
builtWith:
  - name: MkDocs
    url: https://www.mkdocs.org/
    urlLabel: mkdocs.org
    pros:
      - Easy deployment with GitHub Pages.
      - Plain Markdown files — no database, and the content is already formatted.
    cons:
      - Build time seems to grow sharply past a certain number of pages.
  - name: Material
    url: https://squidfunk.github.io/mkdocs-material/
    urlLabel: mkdocs-material
    pros:
      - Many extensions, including search and multilingual support.
roadmap:
  - text: A multilingual website.
    done: true
permalink: /en/project/brain/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/carousel.njk" %}

## Overview

- A single place where I gather my notes.
- A playground to practice writing documentation.

## Built With

{{ techList(builtWith) }}

## Roadmap

{{ checklist(roadmap) }}
