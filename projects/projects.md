---
title: Projets
eleventyNavigation:
  key: Projets
  order: 3
---

# Page des projets

{% for projet in collections.projets %}

  <article>
    <h2>{{ projet.data.title }}</h2>
    <p>{{ projet.data.description  }}</p>
  </article>
{% endfor %}
