---
title: Week 1 - VM Ubuntu Server Markdown Zettelkasten
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
layout: feed_layout.njk
url: "lionelpinheiro.com/boots/week1"
tags: ["boots"]
---

# Week 1 - VM Ubuntu Server Markdown Zettelkasten

## Zettelkasten

Zettlekasten is a method created by Niklas Luhmann a very prolific German sociologist and philosopher, the method consist in building a box of notes. Each note has to be about one subject only if I have to explain something else related to the topic I should create another card, and link them with tags. Every note/card contains a unique identifier, a title, the content, and tags. The content length should have 25 maximum writing lines but can also have images or code snippets.

The advantage of this method? Using my own words to better assimilate knowledge and easier to revue the idea is appealing but I feel it requires a lot of discipline to do it regularly and maintain it. Using English can also be time-consuming and draining maybe I should do it in french it's something I should think about.
I will still give it a shot.

It was recommended to host it on github because it offers some functionalities a build-in editor, displays markdown, and a search functionality.

## VM - Ubuntu Server

One of the main tasks during this week was creating a lab where we could practice safely whithout the fear of breaking a system. For doing so at my understanding we could have choose between containers with docker but as beginners I think the learning curve could be to harsh, dualbooting but some mistakes can happen for example deleting a operating system already present on the machine (personnal experience).

So we use a virtual machine with [virtualbox](https://www.virtualbox.org/), thing that I have never done before, and I can see why it was recommended easy to install, I can create delete VM at ease.
As OS we install Ubuntu Server as seems to be one of the most use OS in production. RedHat and Amazon linux were mentioned but as proprietary system they are more difficult to optain.

I already have some experience with servers basic stuff like connecting to it with SHH connection installing apache server but managing key and connection to different servers was a little painfull so I try to go little further and look how I could manage that.
I found a couple of videos on the [linode](https://www.youtube.com/c/linode/search?query=ssh) youtube channel on this topic where I learn about :
- Make a Config file
- Create a ed25519 SHH key
- Link a key to a server
- SSH agent ?

## Mardown

We also aboard the subject of markdown a markup language that can be converted into HTML. I was already familiar with it because I'm using eleventy a framework to build this website that uses markdown format files to create pages.  