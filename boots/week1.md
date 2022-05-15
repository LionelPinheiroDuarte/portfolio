---
title: Week 1 - VM Ubuntu Server Markdown Zettelkasten
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
layout: project_layout.njk
url: "lionelpinheiro.com/boots/week1"
tags: ["boots"]
---

# Week 1 - VM Ubuntu Server Markdown Zettelkasten

## Zettelkasten

## VM - Ubuntu Server

One of the main tasks during this week was creating a lab where we could practice safely whithout the fear of breaking a system. For doing so at my understanding we could have choose between containers with docker but as beginners I think the learning curve could be to harsh, dualbooting but some mistakes can happen for example deleting a operating system already present on the machine (personnal experience).

So we use a virtual machine with [virtualbox](https://www.virtualbox.org/), thing that I have never done before, and I can see why it was recommended easy to install, I can create delete VM at ease.
As OS we install Ubuntu Server as seems to be one of the most use OS in production. RedHat and Amazon linux were mentioned but as proprietary system they are more difficult to optain.

I already have some experience with servers basic stuff like connecting to it with ssh connection installing apache server but managing key and connection to different servers was a little painfull so I try to go little further and look how I could manage that.
I found a couple of videos on the [linode](https://www.youtube.com/c/linode/search?query=ssh) youtube channel about this topic where i learn about:
- What's a config file
- How to create a ed25519 ssh key
- How to link a key to a server
- What is a ssh agent

## Mardown