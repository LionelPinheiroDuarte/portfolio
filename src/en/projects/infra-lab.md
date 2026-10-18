---
title: infra-lab
description: A DevOps learning project documenting the progression from traditional VM deployment to container orchestration.
lead: A DevOps project documenting the deployment of a Go application across three infrastructure paradigms — VM, Docker, Kubernetes — to understand why each technology exists by experiencing the problems it solves.
layout: project.njk
repo: infra-lab
tags: ["projects_en", "automatisation", "star"]
order: 1
tech: Go · Docker · Terraform · AWS
status: Phase 2 / 3 in progress
websiteType: docs
websiteName: infra-lab
websiteUrl: https://lionelpinheiroduarte.github.io/infra-lab/
facts:
  - label: Stack
    value: Go · Docker · Terraform · AWS
  - label: Docker image
    value: 28.8 MB
  - label: Response time
    value: "~19.7 ms · P95 < 50 ms"
phases:
  - label: Phase 1
    status: done
    title: Bare metal on AWS
    text: Provisioned EC2 infrastructure with Terraform (VPC, security groups). Deployed the Go app manually to understand failure modes, then automated the process with a bash script.
  - label: Phase 2
    status: current
    title: Containerization
    text: Migrated to Docker Compose with a multi-service stack (Go app, PostgreSQL, Prometheus). Separated dev and prod configurations, added data persistence via Docker volumes, backup/restore scripts, and container health checks.
  - label: Phase 3
    status: next
    title: Orchestration
    text: Kubernetes deployment with GitOps (ArgoCD), CI/CD pipeline, and distributed monitoring.
builtWith:
  - name: Go 1.21
    role: Backend API with native Prometheus instrumentation
  - name: Docker
    role: Multi-stage builds with an optimized Alpine image
  - name: Docker Compose
    role: Local service orchestration
  - name: Prometheus
    role: System and business metrics, health checks
  - name: Terraform
    role: EC2, VPC and security group provisioning on AWS
roadmap:
  - text: CI/CD pipeline with GitHub Actions
  - text: PostgreSQL database on RDS
  - text: GitOps with ArgoCD
  - text: Distributed monitoring with Grafana and alerting
  - text: Log aggregation (Loki)
permalink: /en/project/infra-lab/
---
{% from "partials/blocks.njk" import timeline, techList, checklist with context %}

## Progression

{{ timeline(phases) }}

## Technical Architecture

<img src="/images/projects/infra-lab.svg" class="diagram" alt="infra-lab architecture diagram">

## Built With

{{ techList(builtWith) }}

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

## Roadmap

{{ checklist(roadmap) }}
