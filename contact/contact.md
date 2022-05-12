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
    <h1>Contactez-moi</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elitsit amet, consectetur adipiscing elit</p>
  </div>
  <div>
  <p class="mail"><ion-icon name="mail-outline"></ion-icon><a href="mailto:lionel.duarte.p@gmail.com">lionelpinheiro@gmail.com</a></p>
<ul class="contact_social">
  {% for social in socials %}
  {% include "partials/socials.njk" %}
  {% endfor %}
</ul>
  </div>
</div>
</section>
