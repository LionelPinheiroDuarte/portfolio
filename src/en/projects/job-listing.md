---
title: job-listing
description: Production-ready DevOps pipeline demonstrating enterprise-grade practices for a talent management platform. Built with Go, Docker, Kubernetes, and comprehensive observability stack.
layout: project.njk
repo: job-listing
tags: ["projects_en", "automatisation", "star"]
websiteName: job-listing
websiteUrl: https://lionelpinheiroduarte.github.io/job-listing/
permalink: en/project/{{title}}/
---

# **Job-listing**

A cloud-native talent management platform built to practice and demonstrate real DevOps skills — from containerization to observability.

## Overview

### Project Goal

Build a complete DevOps infrastructure, progressing from local development to AWS production deployment, applying production standards from day one.

### Links
- GitHub: [Repository](https://github.com/LionelPinheiroDuarte/job-listing)
- Documentation: [job-listing](https://lionelpinheiroduarte.github.io/job-listing/)


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
job-listing/
├── deployments/           # Docker Compose configurations
├── monitoring/            # Prometheus configuration
├── main.go               # Instrumented Go application
├── Dockerfile            # Optimized multi-stage build
└── docs/
    └── phase1/          # Learning log
```


## Improvement Ideas

- [ ] CI/CD pipeline with GitHub Actions
- [ ] Kubernetes cluster on AWS EKS
- [ ] Infrastructure as Code with Terraform
- [ ] PostgreSQL RDS database
- [ ] GitOps with ArgoCD
- [ ] Distributed monitoring with Grafana and alerting
- [ ] Log aggregation (Loki)
