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

# **infra-lab**

Un projet DevOps documentant le déploiement d'une application Go à travers trois paradigmes d'infrastructure — VM, Docker, Kubernetes — pour comprendre pourquoi chaque technologie existe en rencontrant les problèmes qu'elle résout.

## Aperçu

### Objectif du projet

Construire une infrastructure DevOps complète, en progressant du développement local vers un déploiement AWS en production, en appliquant des standards de production dès le départ.

### Liens
- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/infra-lab)
- Documentation : [infra-lab](https://lionelpinheiroduarte.github.io/infra-lab/)


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

├── deployments/           # Configurations Docker Compose
├── monitoring/            # Configuration Prometheus
├── main.go               # Application Go instrumentée
├── Dockerfile            # Build multi-étapes optimisé
└── docs/
    └── phase1/          # Journal d'apprentissage
```


## Idées d'améliorations

- [ ] Pipeline CI/CD avec GitHub Actions
- [ ] Infrastructure as Code avec Terraform
- [ ] Base de données PostgreSQL sur RDS
- [ ] GitOps avec ArgoCD
- [ ] Monitoring distribué avec Grafana et alerting
- [ ] Agrégation de logs (Loki)
