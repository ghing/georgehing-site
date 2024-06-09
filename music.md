---
layout: base.liquid
title: George's Music
---

# {{ title }}

George loved music. He often made notes about songs he liked or remembered. These are some of the songs from his notes or that we remember him playing.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5jKyodoyK9gpCZZPvV3eab?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<ul>
  {% for track in playlist %}
  <li>{{ track.title }} - {{ track.artist }}</li>
  {% endfor %}
</ul>