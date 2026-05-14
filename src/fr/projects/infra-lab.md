---
title: infra-lab
description: Projet d'apprentissage DevOps documentant la progression d'un déploiement VM traditionnel vers l'orchestration de conteneurs. Construit avec Go, Docker, Terraform et AWS.
layout: project.njk
repo: infra-lab
tags: ["projects_fr", "automatisation", "star"]
websiteName: infra-lab
websiteUrl: https://lionelpinheiroduarte.github.io/infra-lab/
permalink: fr/projet/{{title}}/
---

# **Infra-lab**

Un projet DevOps documentant le déploiement d'une application Go à travers trois paradigmes d'infrastructure — VM, Docker, Kubernetes — pour comprendre pourquoi chaque technologie existe en rencontrant les problèmes qu'elle résout.

## Liens
- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/infra-lab)
- Documentation : [infra-lab](https://lionelpinheiroduarte.github.io/infra-lab/)


## Progression

**Phase 1 — Déploiement sur VM AWS** ✓ Terminée
Infrastructure EC2 provisionnée avec Terraform (VPC, security groups). Déploiement manuel de l'application Go pour comprendre les points de friction, puis automatisation du processus via un script bash.

&nbsp;

**Phase 2 — Conteneurisation** *(en cours)*
Migration vers Docker Compose avec une stack multi-services (app Go, PostgreSQL, Prometheus). Séparation des configurations dev et prod, persistance des données via volumes Docker, scripts de backup/restore et health checks sur les conteneurs.

&nbsp;

**Phase 3 — Orchestration** *(à venir)*
Déploiement Kubernetes avec GitOps (ArgoCD), pipeline CI/CD et monitoring distribué.


## Architecture technique

```
┌─────────────────┐    ┌─────────────────┐
│   Application   │    │  Surveillance   │
│   Go API        │◄───┤   Prometheus    │
│   Port: 8000    │    │   Port: 9090    │
└─────────────────┘    └─────────────────┘
         │
    [Docker Compose]
```

| Service | Port | Description |
|---------|------|-------------|
| Application Go | 8000 | API avec endpoints /health et /metrics |
| Prometheus | 9090 | Collecte et visualisation des métriques |


## Construit avec

- **Go 1.21** — API backend avec instrumentation Prometheus native
- **Docker** — builds multi-étapes avec image Alpine optimisée
- **Docker Compose** — orchestration des services en local
- **Prometheus** — métriques système et métier, health checks


## Performances

- **Image Docker** : 28.8MB (Alpine + optimisation multi-étapes)
- **Temps de réponse** : ~19.7ms en moyenne (P95 < 50ms)


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


## Idées d'améliorations

- [ ] Pipeline CI/CD avec GitHub Actions
- [ ] Infrastructure as Code avec Terraform
- [ ] Base de données PostgreSQL sur RDS
- [ ] GitOps avec ArgoCD
- [ ] Monitoring distribué avec Grafana et alerting
- [ ] Agrégation de logs (Loki)
