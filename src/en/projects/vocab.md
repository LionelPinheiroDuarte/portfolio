---
title: vocab
description: A mobile vocabulary app built with React Native and Expo — save words, review with flashcards, with a showcase site and an Android beta.
layout: project.njk
repo: vocab
tags: ["projects_en", "webdev", "star"]
websiteName: Vocab
websiteUrl: https://vocab.lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/vocab-app.webp"
    alt: "Vocab — Home, Word detail (dark mode) and Review screens"
  - src: "/images/projects/vocab-site.webp"
    alt: "Vocab — showcase site: “Les beaux mots ne devraient pas s’oublier.”"
  - src: "/images/projects/vocab-emails.webp"
    alt: "Vocab — beta confirmation and invitation emails"
permalink: en/project/vocab/
templateEngineOverride: njk, md
---

# **Vocab**

A mobile vocabulary app for building and reviewing personal word collections. Search any French word, pick the definition that matches your context, save it locally, and practice with flashcards. Saved words and review sessions work without a connection — only search requires one. The app is in internal testing on Google Play, with a showcase site to join the beta.

{% include "partials/carousel.njk" %}

## Links

- GitHub: [Repo](https://github.com/LionelPinheiroDuarte/vocab)
- Website: [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com)

## Technical Architecture

<img src="/images/projects/vocab.svg" class="diagram" alt="Vocab architecture diagram: Wiktionnaire, SQLite, EAS Build, Play Store">

## Frontend

Built with **React Native** and **Expo SDK 57**, using file-based routing (expo-router) and a strict three-layer architecture:

- **Service** — fetches and parses definitions from an external API on each search
- **SQLite** (`expo-sqlite`) — persists words and definitions locally after save
- **Zustand** — in-memory store bridging the database and the UI

Each screen is stateless by design. All logic lives in custom hooks — search state machine, flashcard session, definition picker — keeping components focused on rendering only.

The visual identity, **« Carnet »**, treats the app as a pocket dictionary you annotate: warm paper, black ink and a single bordeaux accent, Literata for words and definitions, Instrument Sans for the interface, rules instead of shadows. Every value lives in one token file (light and dark palettes, 6-step type scale, 4-pt spacing), and a small `createThemedStyles` helper builds both stylesheets once so no screen hardcodes a color.

## Showcase Site

The site at [vocab.lionelpinheiroduarte.com](https://vocab.lionelpinheiroduarte.com) carries the « Carnet » direction to the web. It started as a static HTML/CSS mockup, then integrated into **Eleventy 3**: a single layout, with domain, name and email kept in one data file. The generated HTML was diffed against the mockup page by page to prove it was identical apart from links.

- **No trackers**: self-hosted fonts, no cookies, no third-party requests — which allows a strict Content-Security-Policy
- **Accessibility**: skip link, keyboard tabs following the ARIA pattern, AA contrast, fully usable without JavaScript
- **Legal pages** written from the app's actual code, with the privacy policy in French and English — which surfaced that Android backup (`allowBackup`) was on by default

### Double opt-in beta, without a database

Sign-up runs in **PHP** on the shared hosting, with no third-party service and no stored address:

1. the form sends a **confirmation email** to the typed address;
2. its link opens a page with a button — following the link alone does nothing, because mail scanners open links on their own;
3. confirming sends the **invitation** with the Google Play testing link and notifies me.

Links carry the address and an **HMAC-SHA256 signature** (key injected at build time from a GitHub secret); they expire after 48 hours and work once — six simultaneous clicks trigger a single send. The emails, plain text plus HTML, are built with tables, inline styles and no images so they keep the design in Gmail and Outlook alike. The whole flow was tested under Apache in Docker (tampered, expired and reused links, cross-site posts, missing key) before going live.

## DevOps

Cloud builds via **EAS Build** — no local Android Studio required:

- `eas build --platform android` → signed `.aab` with auto-incremented `versionCode`
- `eas submit --platform android` → direct upload to Play Store internal track

CI/CD via GitHub Actions, split into four workflows:

- `ci.yml` — lint + typecheck + unit tests on every push to `dev`
- `release-build.yml` — triggers an EAS build automatically on major-version
  tags (`v2.0.0`, `v3.0.0`, ...)
- `release-submit.yml` — manual `workflow_dispatch` step that submits the
  latest build to the Play Store Internal Testing track — kept separate and
  manual as a deliberate human checkpoint before real publication, since
  required-reviewer environments aren't available on private repos under the
  free GitHub plan
- `site.yml` — for the showcase site: build, HTML validation, broken links
  (lychee) and **Lighthouse CI** with minimum scores, then an **FTPS** deploy to
  o2switch from `main` only, and only when everything passed, followed by a
  production smoke test. The `.htaccess` is generated at build time (forced
  HTTPS, HSTS, CSP, long caching for content-hashed assets)

OTA updates via **EAS Update**: `runtimeVersion` uses a `fingerprint` policy,
so a custom `./v update` command hashes the current native build and compares
it to the last EAS build's fingerprint before publishing — matching
fingerprints get a JS-only update pushed straight to devices, a mismatch
(native code changed) stops the script and points to a full rebuild instead
of silently shipping an incompatible update. `./v rollback` reverts a channel
to its embedded update via `eas update:roll-back-to-embedded` if an OTA ships
something broken.

Observability via **Sentry**: crash/error capture (environment-tagged dev vs.
production), verified end-to-end in production. `release-build.yml` and
`release-submit.yml` also report to Sentry — linking each release to the
commits that shipped in it and marking the actual deploy once it reaches
testers, for suspect-commit detection and crash-free rate per version.

## Built With

- **React Native / Expo SDK 57** — cross-platform mobile framework
- **expo-router** — file-based navigation
- **expo-sqlite** — local SQLite storage (synchronous, offline-first)
- **Zustand** — lightweight global state management
- **react-native-reanimated v4** — gesture animations
- **Sentry** (`@sentry/react-native`) — crash and error reporting, releases
  linked to CI/CD for regression tracking
- **EAS Build, Submit + Update** — cloud builds, Play Store uploads, and
  fingerprint-checked OTA JS updates
- **Eleventy 3** — static showcase site, hosted on o2switch
- **PHP 8** — double opt-in beta sign-up with HMAC-signed links
- **GitHub Actions** — CI (lint/typecheck/test), a tag-triggered release pipeline,
  and site checks and deploys
- **TypeScript** (strict mode) — full type safety
- **ESLint 9** (flat config, eslint-config-expo) — code quality
