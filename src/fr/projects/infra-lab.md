---
title: infra-lab
description: Projet d'apprentissage DevOps documentant la progression d'un déploiement VM traditionnel vers l'orchestration de conteneurs.
lead: Un projet DevOps documentant le déploiement d'une application Go à travers trois paradigmes d'infrastructure — VM, Docker, Kubernetes — pour comprendre pourquoi chaque technologie existe en rencontrant les problèmes qu'elle résout.
layout: project.njk
repo: infra-lab
tags: ["projects_fr", "automatisation", "star"]
order: 1
tech: Go · Docker · Terraform · AWS
status: Phase 2 / 3 en cours
websiteType: docs
websiteName: infra-lab
websiteUrl: https://lionelpinheiroduarte.github.io/infra-lab/
facts:
  - label: Stack
    value: Go · Docker · Terraform · AWS
  - label: Image Docker
    value: 28,8 MB
  - label: Temps de réponse
    value: "~19,7 ms · P95 < 50 ms"
phases:
  - label: Phase 1
    status: done
    title: Déploiement sur VM AWS
    text: Infrastructure EC2 provisionnée avec Terraform (VPC, security groups). Déploiement manuel de l'application Go pour comprendre les points de friction, puis automatisation du processus via un script bash.
  - label: Phase 2
    status: current
    title: Conteneurisation
    text: Migration vers Docker Compose avec une stack multi-services (app Go, PostgreSQL, Prometheus). Séparation des configurations dev et prod, persistance des données via volumes Docker, scripts de backup/restore et health checks sur les conteneurs.
  - label: Phase 3
    status: next
    title: Orchestration
    text: Déploiement Kubernetes avec GitOps (ArgoCD), pipeline CI/CD et monitoring distribué.
builtWith:
  - name: Go 1.21
    role: API backend avec instrumentation Prometheus native
  - name: Docker
    role: Builds multi-étapes avec image Alpine optimisée
  - name: Docker Compose
    role: Orchestration des services en local
  - name: Prometheus
    role: Métriques système et métier, health checks
  - name: Terraform
    role: Provisionnement EC2, VPC et security groups sur AWS
roadmap:
  - text: Pipeline CI/CD avec GitHub Actions
  - text: Base de données PostgreSQL sur RDS
  - text: GitOps avec ArgoCD
  - text: Monitoring distribué avec Grafana et alerting
  - text: Agrégation de logs (Loki)
permalink: /fr/projet/infra-lab/
---
{% from "partials/blocks.njk" import timeline, techList, checklist with context %}

## Progression

{{ timeline(phases) }}

## Architecture technique

<img src="/images/projects/infra-lab.svg" class="diagram" alt="Schéma d'architecture infra-lab">

## Construit avec

{{ techList(builtWith) }}

## Structure du projet

```
├── cmd/app/               # Point d'entrée de l'application
├── config/                # Configuration du service systemd
├── deployments/           # Docker Compose (base, dev, prod)
├── infrastructure/
│   └── terraform/         # Modules EC2 (ec2-basic, ec2-docker)
├── monitoring/            # Configuration Prometheus
├── scripts/
│   ├── deploy             # Script d'automatisation du déploiement VM
│   └── database/          # Scripts backup/restore PostgreSQL
├── docs/                  # GitHub Pages (phase1, phase2)
├── main.go                # Application Go instrumentée
└── Dockerfile             # Build multi-étapes optimisé
```

## Feuille de route

{{ checklist(roadmap) }}
