---
layout: base.njk
title: Accueil
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
eleventyNavigation:
  key: Accueil
  order: 1
templateEngineOverride: njk,md
---

<section>
  <h1>Lionel Pinheiro</h1>
  <h2>Intégrateur Web</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="/setup" target="_blanck"><mark>environnement de travail</mark></a> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </br>
  <h3>Prochain objectifs</h3>
  <ul>
    <li class="list-item-style">Certificat AWS Solutions Architect</li>
  </ul>
</section>

<section>
<h2>Compétences</h2>
<ul id="skill">
  {% for skill in skills %}
  <li>
    <h3>{{ skill.title }}</h3>
    <p>{{ skill.description }}</p>
  </li>
  {% endfor %}
</ul>
</section>

<section>
<h2>Projets</h2>
<ul id="project_section">
{% for projet in collections.projets %}

{% include "partials/project.njk" %}

{% endfor %}

</ul>
</section>

<section>
<h2>Contactez moi</h2>
{% include "partials/contact.njk" %}
</section>
