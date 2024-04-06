---
layout: base.njk
title: Accueil
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
eleventyNavigation:
  key: accueil
  order: 1
templateEngineOverride: njk,md
---
<section>
  <h1 class="">lionel</h1>
  <h1 class="negative-mt mb">pinheiro duarte</h1>
  <h2 class="mb">Intégrateur web - Webmaster</h2>
  <p>Hi ! I'm junior web developper based in France.</p>
  <p>Right now I'm focusing on improving my understanding of linux and learning more
about the cloud.</p>
  <p>I'm currently looking for a job so if you're interrested, contact me.</p>
</section>
 
<section id="experimentation">
<h2 class="">Projets</h2>
<ul id="project_section">
{% for skill in skills %}


{% endfor %}

</ul>
</section>
