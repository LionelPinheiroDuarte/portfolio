---
title: Boost RSS flux
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
layout: base.njk
---

<section>
<h1>Boots 2022</h1>
<p>The beginner boost is a series of weekly live streaming video talking about tech focusing on linux, programming, networking, autodidatic learning, and trying to help people land a job in IT.</p>
<p>It wasn't easy to write this previous line without the words teach and course as the creator Robert S. Muhlestein aka <a href="https://github.com/rwxrob" target="_blank">rwxrob</a> doesn't see it that way. For him you cannot just pour knowledge into people's heads and expect them to become proficient, he is just showing a path, and people have to take their own responsibility on practicing and doing the extra step.</p>
<p>Even it's nice to see an experienced software developer and also an infrastructure engineer showing how he works, and giving his thoughts on the industry my goals are to become more comfortable with linux and the command line but also english isn't my native language and even so, I think I have a good understanding of it. I never really expressed myself with it that's why I'm writing these articles to document my journey and practice my writing.</p>

{% for week in collections.boots %}
  <article class="project_article">
    <a href="{{week.url}}"><h2>{{ week.data.title }}</h2></a>
    <p>{{ week.data.description  }}</p>
  </article>
{% endfor %}
</section>
