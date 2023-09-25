---
layout: base.njk
title: Home
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
eleventyNavigation:
  key: Home
  order: 1
templateEngineOverride: njk,md
---
<section>
  <h1>lionel pinheiro duarte</h1>
  <p>Hi ! I'm junior web developper based in France.</p>
  <p>Right now I'm focusing on improving my understanding of linux and learning more
about the cloud.</p>
  <p>I'm currently looking for a job so if you're interrested, contact me.</p>
</section>
 
<section id="experimentation">
<h2>Experimentations</h2>
<p>List of projects based on challenges or courses that covers that
technologies, languages I'm interrested in.
<ul id="project_section">
{% for projet in collections.projets %}

{% include "partials/project.njk" %}

{% endfor %}

</ul>
</section>
