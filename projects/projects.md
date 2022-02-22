---
title: Projets
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
eleventyNavigation:
  key: Projets
  order: 2
layout: base.njk
---

<section>
<h1>Mes projets</h1>
{% for projet in collections.projets %}
  <article>
    <a href="{{projet.url}}"><h2>{{ projet.data.title }}</h2></a>
    <p>{{ projet.data.description  }}</p>
  </article>
{% endfor %}
</section>
