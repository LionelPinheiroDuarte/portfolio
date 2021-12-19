---
title: Projets
eleventyNavigation:
  key: Projets
  order: 3
layout: base.njk
---

# Page des projets

{% for projet in collections.projets %}

  <article>
    <a href="{{projet.url}}"><h2>{{ projet.data.title }}</h2></a>
    <p>{{ projet.data.description  }}</p>
  </article>
{% endfor %}
