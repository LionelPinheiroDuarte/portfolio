---
title: Boot RSS flux
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
layout: base.njk
---

<section>
<h1>Boots</h1>
{% for week in collections.boots %}
  <article class="project_article">
    <a href="{{week.url}}"><h2>{{ week.data.title }}</h2></a>
    <p>{{ week.data.description  }}</p>
  </article>
{% endfor %}
</section>
