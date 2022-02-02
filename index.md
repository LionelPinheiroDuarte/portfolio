---
layout: base.njk
title: Accueil
eleventyNavigation:
  key: Accueil
  order: 1
templateEngineOverride: njk,md
---

# Lionel Pinheiro

## Intégrateur Web

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="/setup" target="_blanck"><mark>environnement de travail</mark></a> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Prochain objectifs

- Certificat AWS Solutions Architect

<h2>Compétences</h2>

<ul id="skill">
  {% for skill in skills %}
  <li>
    <h3>{{ skill.title }}</h3>
    <p>{{ skill.description }}</p>
  </li>
  {% endfor %}
</ul>

## Projets

{% for projet in collections.projets %}

  <article>
    <a href="{{projet.url}}"><h2>{{ projet.data.title }}</h2></a>
    <p>{{ projet.data.description  }}</p>
  </article>

{% endfor %}

{% include "partials/contact.njk" %}
