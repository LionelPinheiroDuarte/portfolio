---
title: Contact
description: Contact page's description
layout: base.njk
eleventyNavigation:
  key: Contact
  order: 3
templateEngineOverride: njk,md
---

<section id="contact_section">
<div class="contact_content">
  <div class="contact_info">
    <h2>Contactez-moi</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div>
  <p class="mail"><span>Email : </span><a href="mailto:lionel.duarte.p@gmail.com">lionelpinheiro@gmail.com</a></p>
<ul class="contact_social">
  {% for social in socials %}
  {% include "partials/socials.njk" %}
  {% endfor %}
</ul>
</div>
</section>
