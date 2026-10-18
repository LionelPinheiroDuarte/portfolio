---
title: portfolio
description: Multilingual responsive portfolio built with Eleventy and hosted on o2switch to showcase my projects and expertise.
lead: The site you are reading — it presents my skills and projects to recruiters, in French and English.
layout: project.njk
repo: portfolio
tags: ["projects_en", "webdev"]
order: 4
tech: Eleventy · Nunjucks · GitHub Actions
websiteName: Portfolio
websiteUrl: https://lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/portfolio-home.webp"
    alt: "Portfolio — home page"
  - src: "/images/projects/portfolio-project.webp"
    alt: "Portfolio — project page"
builtWith:
  - name: Eleventy
    role: Static site generator; content lives in Markdown, no database
  - name: Nunjucks
    role: Templates, reusable macros (project row, timeline, key facts) and the FR / EN versions
  - name: LightningCSS
    role: Bundles and minifies the stylesheets at build time
  - name: Playwright
    role: End-to-end tests (navigation, content, language links)
  - name: GitHub Actions
    role: Build, tests and FTPS deployment to o2switch
  - name: Matomo
    role: Self-hosted, cookieless analytics
roadmap:
  - text: A multilingual website.
    done: true
  - text: Images, videos and GIFs on project pages.
    done: true
  - text: A table of contents on each project page.
permalink: /en/project/portfolio/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/carousel.njk" %}

## Overview

- A home page presenting my profile, my stack and my featured projects.
- A page listing all my projects, with a detailed page for each one.

## Technical Architecture

<img src="/images/projects/portfolio.svg" class="diagram" alt="Portfolio architecture diagram">

## Built With

{{ techList(builtWith) }}

## Roadmap

{{ checklist(roadmap) }}
