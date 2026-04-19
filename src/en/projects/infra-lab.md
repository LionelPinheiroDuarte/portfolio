---
title: infra-lab
description: A DevOps learning project documenting the progression from traditional VM deployment to container orchestration. Built with Go, Docker, Terraform, and AWS.
layout: project.njk
repo: infra-lab
tags: ["projects_en", "automatisation", "star"]
websiteName: infra-lab
websiteUrl: https://lionelpinheiroduarte.github.io/infra-lab/
permalink: en/project/{{title}}/
---

# **infra-lab**

A DevOps project documenting the deployment of a Go application across three infrastructure paradigms — VM, Docker, Kubernetes — to understand why each technology exists by experiencing the problems it solves.

## Overview

### Project Goal

Build a complete DevOps infrastructure, progressing from local development to AWS production deployment, applying production standards from day one.

### Links
- GitHub: [Repository](https://github.com/LionelPinheiroDuarte/infra-lab)
- Documentation: [infra-lab](https://lionelpinheiroduarte.github.io/infra-lab/)


## Technical Architecture

```
┌─────────────────┐    ┌─────────────────┐
│   Application   │    │   Monitoring    │
│   Go API        │◄───┤   Prometheus    │
│   Port: 8000    │    │   Port: 9090    │
└─────────────────┘    └─────────────────┘
         │
    [Docker Compose]
```

| Service | Port | Description |
|---------|------|-------------|
| Go Application | 8000 | API with /health and /metrics endpoints |
| Prometheus | 9090 | Metrics collection and visualization |


## Built With

- **Go 1.21** — backend API with native Prometheus instrumentation
- **Docker** — multi-stage builds with optimized Alpine image
- **Docker Compose** — local service orchestration
- **Prometheus** — system and business metrics, health checks


## Performance

- **Docker image**: 28.8MB (Alpine + multi-stage optimization)
- **Response time**: ~19.7ms average (P95 < 50ms)


## Project Structure

```

├── deployments/           # Docker Compose configurations
├── monitoring/            # Prometheus configuration
├── main.go               # Instrumented Go application
├── Dockerfile            # Optimized multi-stage build
└── docs/
    └── phase1/          # Learning log
```


## Improvement Ideas

- [ ] CI/CD pipeline with GitHub Actions
- [ ] Infrastructure as Code with Terraform
- [ ] PostgreSQL RDS database
- [ ] GitOps with ArgoCD
- [ ] Distributed monitoring with Grafana and alerting
- [ ] Log aggregation (Loki)
