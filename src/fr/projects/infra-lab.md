---
title: infra-lab
description: Projet d'apprentissage DevOps — une application Go déployée sur machine virtuelle, puis avec Docker, puis sur Kubernetes.
lead: "Un projet DevOps documentant le déploiement d'une application Go à travers trois paradigmes d'infrastructure : VM, Docker, Kubernetes."
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
  - label: Temps de déploiement
    value: "1 min 37 → 8 s"
  - label: Provisionnement
    value: "37 s"
phases:
  - label: Phase 1
    status: done
    title: Déploiement sur une machine virtuelle
    text: Le serveur et son réseau sont décrits en code avec Terraform sur AWS. L'application est d'abord déployée à la main, puis par un script.
  - label: Phase 2
    status: current
    title: Conteneurisation
    text: L'application, sa base PostgreSQL et Prometheus tournent dans des conteneurs orchestrés par Docker Compose, avec une configuration distincte pour le développement et la production.
  - label: Phase 3
    status: next
    title: Orchestration
    text: Passage à Kubernetes, déploiements pilotés par Git avec ArgoCD, et supervision de l'ensemble du cluster.
builtWith:
  - name: Terraform
    role: Provisionnement EC2, VPC et security groups sur AWS
  - name: Go 1.21
    role: API backend avec instrumentation Prometheus native
  - name: Docker
    role: Builds multi-étapes avec image Alpine optimisée
  - name: Docker Compose
    role: Orchestration des services, configurations dev et prod
  - name: PostgreSQL 15
    role: Base de données, volumes persistants et scripts de backup/restore
  - name: Prometheus
    role: Métriques système et métier, health checks
roadmap:
  - text: Pipeline CI/CD avec GitHub Actions
  - text: Base de données PostgreSQL sur RDS
  - text: Tableaux de bord Grafana et alerting
  - text: Agrégation de logs (Loki)
permalink: /fr/projet/infra-lab/
---
{% from "partials/blocks.njk" import timeline, techList, checklist with context %}

L'idée est de comprendre pourquoi chaque technologie existe en rencontrant d'abord les problèmes qu'elle résout. Chaque étape est documentée au jour le jour sur le site du projet.

## Progression

{{ timeline(phases) }}

## Architecture technique

<img src="/images/projects/infra-lab.svg" class="diagram" alt="Schéma d'architecture infra-lab">

## Ce que chaque étape a résolu

**Le déploiement à la main.** Installer Go, créer un utilisateur dédié, copier les fichiers, écrire le service système : un premier déploiement manuel prend entre 15 et 20 minutes, et chaque étape est une occasion de se tromper. Un utilisateur oublié ou un port déjà occupé suffit à empêcher l'application de démarrer.

**Un script pour automatiser.** Le script enchaîne tout, de la création du serveur au démarrage de l'application, en 1 min 37. Il gère aussi les cas qui faisaient échouer les premiers essais : un port déjà pris, un lancement depuis un autre dossier. Mais il reste lié à l'état du serveur sur lequel il tourne.

**Les conteneurs.** Avec **Docker**, l'application démarre en moins de 8 secondes. Un build en plusieurs étapes sépare la compilation de l'exécution : l'image finale ne contient que le binaire Go, sur une base Alpine. Les trois conteneurs réunis (application, base de données et supervision) occupent environ 61 Mo de mémoire.

**Démarrer dans le bon ordre.** L'application ne doit pas se lancer avant que sa base de données soit prête : chaque conteneur vérifie son propre état de santé, et l'ordre de démarrage en dépend.

**Ne pas perdre les données.** Les données de **PostgreSQL** survivent aux redémarrages grâce aux volumes Docker, et des scripts de sauvegarde et de restauration ont été écrits puis testés.

**Séparer développement et production.** Une configuration commune, complétée par une variante pour chaque environnement : en production, les mots de passe sont lus depuis un fichier d'environnement, la mémoire est limitée et les journaux sont réduits à l'essentiel.

## Feuille de route

{{ checklist(roadmap) }}

## Construit avec

{{ techList(builtWith) }}
