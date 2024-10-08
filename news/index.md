---
title: News
nav:
  order: 5
  tooltip: Musings and miscellany
---

# {% include icon.html icon="fa-solid fa-newspaper" %}News

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" %}
