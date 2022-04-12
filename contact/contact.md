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
<ul class="contact_social">
  {% for social in socials %}
  {% include "partials/socials.njk" %}
  {% endfor %}
</ul>
</div>
<div class="form-margin-top">
{% include "partials/contact.njk" %}
</div>
</section>
