---
title: portfolio
description: Multilingual responsive portfolio built with Eleventy and hosted on o2switch to showcase my projects and expertise.
layout: project.njk
repo: portfolio
tags: ["projects_en", "webdev"]
websiteName: Portfolio
websiteUrl: https://lionelpinheiroduarte.com
screenshots:
  - src: "/images/projects/portfolio-home.webp"
    alt: "Portfolio — home page"
  - src: "/images/projects/portfolio-project.webp"
    alt: "Portfolio — project page"
permalink: /en/project/{{title}}/
templateEngineOverride: njk, md
---

# **Portfolio**
The goals of this project are to show case my work and skills to potential recruiters.

{% include "partials/carousel.njk" %}

## Overview 

### Goals 

Users can access :

- A presentation page /home where I present myself and what I can do.
- A project page /project to show work I have done. 
- A use page /use that show how I work or my workflow. 

## Links
- GitHub: [Repo](https://github.com/LionelPinheiroDuarte/portfolio)
- Website: [Portfolio](https://lionelpinheiroduarte.com)

## Build with 

### Front-End

- **Eleventy** Static site generator 
    - Use of **nunjucks** has a template language. 
    - Use of the **markdown** format that permits me to not use a database and to have a formated content. 
### Ideas of improvment 
- [ ] Add a summary to each project.
- [ ] Have a multilingual website.
- [ ] Include images/gifs/videos to projects. 
