---
title: infra-lab
description: A DevOps learning project documenting the progression from traditional VM deployment to container orchestration. Built with Go, Docker, Terraform, and AWS.
layout: project.njk
repo: infra-lab
tags: ["projects_en", "automatisation", "star"]
websiteName: infra-lab
websiteUrl: https://lionelpinheiroduarte.github.io/infra-lab/
permalink: en/project/{{title}}/
templateEngineOverride: njk, md
---

# **Infra-lab**

A DevOps project documenting the deployment of a Go application across three infrastructure paradigms — VM, Docker, Kubernetes — to understand why each technology exists by experiencing the problems it solves.

## Links
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


## Progression

**Phase 1 — Bare Metal on AWS** ✓ Complete
Provisioned EC2 infrastructure with Terraform (VPC, security groups). Deployed the Go app manually to understand failure modes — permission errors, port conflicts, missing files — then automated the process down from 15–20 minutes to 1m37s with a bash script. Introduced systemd service management and non-root user security practices.

&nbsp;

**Phase 2 — Containerization** *(in progress)*
Migrated to Docker Compose with a multi-service stack (Go app, PostgreSQL, Prometheus). Separated dev and prod configurations, added data persistence via Docker volumes, backup/restore scripts, and container health checks.

&nbsp;

**Phase 3 — Orchestration** *(upcoming)*
Kubernetes deployment with GitOps (ArgoCD), CI/CD pipeline, and distributed monitoring.


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
├── cmd/app/               # Application entry point
├── config/                # systemd service configuration
├── deployments/           # Docker Compose (base, dev, prod)
├── infrastructure/
│   └── terraform/         # EC2 modules (ec2-basic, ec2-docker)
├── monitoring/            # Prometheus configuration
├── scripts/
│   ├── deploy             # VM deployment automation script
│   └── database/          # PostgreSQL backup/restore scripts
├── docs/                  # GitHub Pages (phase1, phase2)
├── main.go                # Instrumented Go application
└── Dockerfile             # Optimized multi-stage build
```


## Improvement Ideas

- [ ] CI/CD pipeline with GitHub Actions
- [ ] Infrastructure as Code with Terraform
- [ ] PostgreSQL RDS database
- [ ] GitOps with ArgoCD
- [ ] Distributed monitoring with Grafana and alerting
- [ ] Log aggregation (Loki)
