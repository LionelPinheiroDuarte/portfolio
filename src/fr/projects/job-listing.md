---
title: job-listing
description: Pipeline DevOps production-ready démontrant des pratiques professionnelles pour une plateforme de gestion de talents. Construit avec Go, Docker, Kubernetes et un stack d'observabilité complet.
layout: project.njk
repo: job-listing
tags: ["projects_fr", "automatisation", "star"]
websiteName: job-listing
websiteUrl: https://lionelpinheiroduarte.github.io/job-listing/
permalink: fr/projet/{{title}}/
---

# **Job-listing**

Une plateforme de gestion de talents cloud-native, construite pour pratiquer et démontrer des compétences DevOps concrètes — de la conteneurisation à l'observabilité.

## Aperçu

### Objectif du projet

Construire une infrastructure DevOps complète, en progressant du développement local vers un déploiement AWS en production, en appliquant des standards de production dès le départ.

### Liens
- GitHub : [Repo](https://github.com/LionelPinheiroDuarte/job-listing)
- Documentation : [job-listing](https://lionelpinheiroduarte.github.io/job-listing/)


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
job-listing/
├── deployments/           # Configurations Docker Compose
├── monitoring/            # Configuration Prometheus
├── main.go               # Application Go instrumentée
├── Dockerfile            # Build multi-étapes optimisé
└── docs/
    └── phase1/          # Journal d'apprentissage
```


## Idées d'améliorations

- [ ] Pipeline CI/CD avec GitHub Actions
- [ ] Cluster Kubernetes sur AWS EKS
- [ ] Infrastructure as Code avec Terraform
- [ ] Base de données PostgreSQL sur RDS
- [ ] GitOps avec ArgoCD
- [ ] Monitoring distribué avec Grafana et alerting
- [ ] Agrégation de logs (Loki)
