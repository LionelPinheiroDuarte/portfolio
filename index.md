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
  <p>Hi !</br> I'm junior web developper based in France.</br> Right now I'm focusing on improving my understanding of linux and learning more about the cloud.</br>
  But I'm also interrested in optimizing my workflow, front-end development, accessibility   and golang. 

  </p>
  <section id="goals">
    <h3>Goals</h3>
    <ul>
      <li class="list-item-style">AWS Solutions Architect Certification</li>
      <li class="list-item-style">Finishing <a href="https://github.com/rwxrob/boost/tree/2022#readme" target="_blank">rwxrob boots</a> you can follow my journey <a href="https://lionelpinheiro.com/boots/" target="_blanck">here</a> or follow it from a <a href="https://lionelpinheiro.com/bootsfeed.xml">RSS feed</a></li>
    </ul>
  </section >
  <section id="CTA">
    <p><span>Want to know more ?</span> You can check my <mark><a href="http://resume.lionelpinheiro.com" target="_blank">resume</a></mark> here</p></p>
  </section>
</section>
 
<section id="contact">
<div>
  <h3>Want to contact me ?</h3>
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
