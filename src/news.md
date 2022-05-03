---
title: News
layout: "page.njk"
article.data.thumbnail_120w: "no-picture.png"
---

{% for article in collections.news reversed %}

<div class="news-link-area">
  <em class="small date">{{ article.date | newsDate }}</em>

  <article class="news-link-article" onclick="location.href='{{ article.url }}';">
    <img src="{{ article.data.thumbnail_120w }}" class="news-thumbnail" />
    <div class="news-link-text">
      <a href="{{ article.url }}">{{ article.data.title }}</a>
      <em>{{ article.data.description }}</em>
    </div>
  </article>
</div>

{% endfor %}
