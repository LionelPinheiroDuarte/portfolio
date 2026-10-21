---
title: portfolio
description: Bilingual portfolio built with Eleventy, automatically tested and deployed to o2switch.
lead: A personal site that presents my skills and projects to recruiters.
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
    title: "Home page"
  - src: "/images/projects/portfolio-project.webp"
    alt: "Portfolio — project page"
    title: "Project page"
builtWith:
  - name: GitHub Actions
    role: Build, tests and FTPS deployment to o2switch
  - name: Playwright
    role: End-to-end tests and accessibility audits (axe) in light and dark themes
  - name: html-validate
    role: Validation of the generated HTML
  - name: Eleventy
    role: Static site generator; content is Markdown, no database
  - name: Nunjucks
    role: Templates, reusable macros (project row, timeline, key facts) and FR / EN versions
  - name: LightningCSS
    role: Bundles and minifies stylesheets at build time
  - name: Matomo
    role: Self-hosted, cookieless analytics
roadmap:
  - text: Bilingual French / English site
    done: true
  - text: Screenshots, diagrams and demo videos on project pages
    done: true
  - text: Test the build before deploying, then check production
  - text: Table of contents on each project page
permalink: /en/project/portfolio/
---
{% from "partials/blocks.njk" import techList, checklist with context %}

{% include "partials/shots.njk" %}

## Technical Architecture

<img src="/images/projects/portfolio.svg" class="diagram" alt="Portfolio architecture diagram">

## DevOps

**Hands-off deployment.** Every push to the main branch triggers **GitHub Actions**: the site is built, then sent to my o2switch hosting over FTPS. Credentials stay in the repository secrets.

**Tests that look at what a visitor sees.** **Playwright** goes through every page in a real browser: navigation, switching between French and English, internal links, video behaviour. An automated accessibility audit runs on every page, in light and dark themes alike, and the generated HTML is validated.

**A 404 in the right language.** An unknown address leads to an error page in French or English depending on the part of the site being visited, thanks to the server configuration.

**Analytics at home.** **Matomo** runs on my own hosting, without cookies: statistics never go to a third-party service.

## Frontend

**Two languages, one template.** Each project exists as two Markdown files, one per language. The page header (title, status, links, key facts) is built from their metadata, and reusable macros render the timeline, the technologies or the roadmap: adding a project comes down to writing text.

**A single source of styles.** All colours and spacing live in one variables file, with light and dark themes. Stylesheets are bundled and minified at build time.

**Smooth navigation.** Moving from page to page cross-fades without JavaScript, and the header stays in place. Screenshots and diagrams open full size in a shared viewer.

## Roadmap

{{ checklist(roadmap) }}

## Built With

{{ techList(builtWith) }}
