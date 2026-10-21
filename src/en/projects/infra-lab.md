---
title: infra-lab
description: A DevOps learning project — a Go application deployed on a virtual machine, then with Docker, then on Kubernetes.
lead: "A DevOps project documenting the deployment of a Go application across three infrastructure paradigms: VM, Docker, Kubernetes."
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
  - label: Deployment time
    value: "1 min 37 → 8 s"
  - label: Provisioning
    value: "37 s"
phases:
  - label: Phase 1
    status: done
    title: Deployment on a virtual machine
    text: The server and its network are described as code with Terraform on AWS. The app is first deployed by hand, then with a script.
  - label: Phase 2
    status: current
    title: Containerization
    text: The app, its PostgreSQL database and Prometheus run in containers orchestrated by Docker Compose, with a separate configuration for development and production.
  - label: Phase 3
    status: next
    title: Orchestration
    text: Moving to Kubernetes, Git-driven deployments with ArgoCD, and monitoring across the whole cluster.
builtWith:
  - name: Terraform
    role: EC2, VPC and security group provisioning on AWS
  - name: Go 1.21
    role: Backend API with native Prometheus instrumentation
  - name: Docker
    role: Multi-stage builds with an optimized Alpine image
  - name: Docker Compose
    role: Service orchestration, dev and prod configurations
  - name: PostgreSQL 15
    role: Database, persistent volumes and backup/restore scripts
  - name: Prometheus
    role: System and business metrics, health checks
roadmap:
  - text: CI/CD pipeline with GitHub Actions
  - text: PostgreSQL database on RDS
  - text: Grafana dashboards and alerting
  - text: Log aggregation (Loki)
permalink: /en/project/infra-lab/
---
{% from "partials/blocks.njk" import timeline, techList, checklist with context %}

The idea is to understand why each technology exists by first running into the problems it solves. Each step is documented day by day on the project site.

## Progression

{{ timeline(phases) }}

## Technical Architecture

<img src="/images/projects/infra-lab.svg" class="diagram" alt="infra-lab architecture diagram">

## What Each Step Solved

**Deploying by hand.** Installing Go, creating a dedicated user, copying files, writing the system service: a first manual deployment takes 15 to 20 minutes, and every step is a chance to get something wrong. A missing user or a port already in use is enough to keep the app from starting.

**A script to automate it.** The script chains everything, from creating the server to starting the app, in 1 min 37. It also handles the cases that broke the first attempts: a port already taken, a launch from another directory. But it stays tied to the state of the server it runs on.

**Containers.** With **Docker**, the app starts in under 8 seconds. A multi-stage build separates compilation from execution: the final image holds only the Go binary, on an Alpine base. The three containers together (app, database and monitoring) use about 61 MB of memory.

**Starting in the right order.** The app must not start before its database is ready: each container checks its own health, and the startup order depends on it.

**Keeping the data.** **PostgreSQL** data survives restarts thanks to Docker volumes, and backup and restore scripts were written and tested.

**Separating development and production.** A shared configuration, extended by one variant per environment: in production, passwords are read from an environment file, memory is capped and logs are kept to the essentials.

## Roadmap

{{ checklist(roadmap) }}

## Built With

{{ techList(builtWith) }}
