---
title: vocab
description: A mobile vocabulary app built with React Native and Expo.
lead: 'A mobile vocabulary app for building and reviewing personal word collections.'
layout: project.njk
repo: vocab
tags: ["projects_en", "webdev", "star"]
order: 2
status: Internal testing on Google Play
tech: React Native · Expo · SQLite · EAS
websiteName: Vocab
websiteUrl: https://vocab.lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/vocab-app.webp"
    alt: "Vocab — Home, Word detail (dark mode) and Review screens"
    title: "App"
  - src: "/images/projects/vocab-site.webp"
    alt: "Vocab — showcase site: “Les beaux mots ne devraient pas s’oublier.”"
    title: "Showcase site"
  - src: "/images/projects/vocab-emails.webp"
    alt: "Vocab — beta confirmation and invitation emails"
    title: "Beta emails"
builtWith:
  - name: 'EAS Build, Submit + Update'
    role: 'Cloud builds, Play Store uploads, and fingerprint-checked OTA JS updates'
  - name: 'GitHub Actions'
    role: 'CI (lint/typecheck/test), a tag-triggered release pipeline, and site checks and deploys'
  - name: 'Sentry (<code>@sentry/react-native</code>)'
    role: 'Crash and error reporting, releases linked to CI/CD for regression tracking'
  - name: 'React Native / Expo SDK 57'
    role: 'Cross-platform mobile framework'
  - name: 'expo-router'
    role: 'File-based navigation'
  - name: 'expo-sqlite'
    role: 'Local SQLite storage (synchronous, offline-first)'
  - name: 'Zustand'
    role: 'Lightweight global state management'
  - name: 'react-native-reanimated v4'
    role: 'Gesture animations'
  - name: 'TypeScript (strict mode)'
    role: 'Full type safety'
  - name: 'ESLint 9 (flat config, eslint-config-expo)'
    role: 'Code quality'
  - name: 'Eleventy 3'
    role: 'Static showcase site, hosted on o2switch'
  - name: 'PHP 8'
    role: 'Double opt-in beta sign-up with HMAC-signed links'
permalink: /en/project/vocab/
---
{% from "partials/blocks.njk" import techList with context %}

With vocab, I wanted to explore the full lifecycle of a mobile app, from design to deployment, on the development side as well as the DevOps side, while building a tool that is useful day to day: growing my vocabulary.

- **Search** for a word, with definitions coming from Wiktionnaire
- **Pick** the definition that matches the context where you came across it
- **Save** the word to your collection, stored on the phone
- **Review** your collection with flashcards
- Everything works **offline**, except search

{% include "partials/shots.njk" %}

## Technical Architecture

<img src="/images/projects/vocab.svg" class="diagram" alt="Vocab architecture diagram: Wiktionnaire, SQLite, EAS Build, Play Store">

## DevOps

The app is compiled in the cloud by **EAS Build**: each build is signed, numbered automatically, then made available to testers on Google Play.

**Continuous integration.** Every push to the development branch goes through **GitHub Actions**: code analysis, type checking and unit tests.

**A two-step release.** A version tag triggers the build, but the upload to Google Play is started by hand. On a private repository, GitHub offers no approval before deployment without an Enterprise plan: the manual trigger plays that role of human sign-off.

**Updates without going through the store.** When only the JavaScript changes, the new version goes straight to the phones. The risk: shipping code that expects a native module missing from the installed app. To prevent it, a custom script compares the fingerprint of the native code with that of the last build and refuses to publish if they differ. A rollback command brings the app back to its original version if an update goes wrong.

**Error tracking.** **Sentry** reports crashes, keeping development and production apart. Each release is linked to the commits it contains and marked as deployed once it reaches testers: when a regression shows up, I know which version and which commit to look at.

**The showcase site** has its own pipeline: HTML validation, broken link checks and a performance audit with minimum thresholds. It is only deployed if everything passes, then checked in production.

## Frontend

Built with **React Native** and **Expo SDK 57**, with file-based routing (expo-router) and a strict three-layer architecture:

- **Service** — fetches and parses definitions from an external API on each search
- **SQLite** (`expo-sqlite`) — persists words and definitions locally once saved
- **Zustand** — in-memory store bridging the database and the UI

Every screen is stateless by design. All the logic lives in custom hooks, so components focus on rendering.

## Showcase Site

The site [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com) is the entry point to the beta: visitors discover the app and sign up to join the test on Google Play. Sign-up goes through an email confirmation, then an invitation to the test.

## Built With

{{ techList(builtWith) }}
