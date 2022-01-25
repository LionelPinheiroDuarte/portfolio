---
layout: base.njk
title: Accueil
eleventyNavigation:
  key: Accueil
  order: 1
---

# Lionel Pinheiro

## Intégrateur Web

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="/setup" target="_blanck">environnement de travail</a> consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Prochain objectifs

- Certificat AWS Solutions Architect

## Compétences

## Projets

{% for projet in collections.projets %}

  <article>
    <a href="{{projet.url}}"><h2>{{ projet.data.title }}</h2></a>
    <p>{{ projet.data.description  }}</p>
  </article>

{% endfor %}

<section id="form_contact">
    <h2>Contactez moi</h2>
    <form>
        <label>Nom</label>
        <input/>
        <label>Sujet</label>
        <input/>
        <label>Votre messsage</label>
        <textarea name="textarea" rows="8"></textarea>
        <button>Envoyez votre message</button>
    </form>
</section>
