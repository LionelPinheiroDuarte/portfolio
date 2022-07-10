---
title: Contact
description: Contact page's description
layout: base.njk
# eleventyNavigation:
#   key: Contact
#   order: 3
# templateEngineOverride: njk,md
---

<section id="contact_section">
    <h1>Contact</h1>
    <p>Do you want to know more ? Or do you want to get in touch with me ? Don't hesitate, <mark><em>contact me !</em><mark></p>
    <p class="mail"><ion-icon name="mail-outline"></ion-icon><a href="mailto:lionel.duarte.p@gmail.com">lionelpinheiro@gmail.com</a></p>
<ul class="contact_social">
  {% for social in socials %}
  {% include "partials/socials.njk" %}
  {% endfor %}
</ul>
</section>
