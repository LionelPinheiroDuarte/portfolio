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
  <h1>Lionel Pinheiro</h1>
  <h2 class="role">Looking for a <em>DevOps</em> role</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="/setup" target="_blanck"><mark>environnement de travail</mark></a> consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <section id="goals">
    <h3>Goals</h3>
    <ul>
      <li class="list-item-style">AWS Solutions Architect Certification</li>
    </ul>
  </section >
  <section id="CTA">
    <p><span>Want to know more</span> you can check my <mark><a href="http://resume.lionelpinheiro.com" target="_blank">resume</a></mark> here</p></p>
  </section>
</section>

<section id="contact">
<div>
<h3>Want to contact me</h3>
</div>
<div>
  <p class="mail"><ion-icon name="mail-outline"></ion-icon><a href="mailto:lionel.duarte.p@gmail.com">lionelpinheiro@gmail.com</a></p>
<ul class="contact_social">
  {% for social in socials %}
  {% include "partials/socials.njk" %}
  {% endfor %}
</ul>
</div>
</section>

<section>
<h3>See what I can do </h3>
<ul id="project_section">
{% for projet in collections.projets %}

{% include "partials/project.njk" %}

{% endfor %}

</ul>
</section>
