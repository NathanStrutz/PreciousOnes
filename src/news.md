---
title: News
layout: "page.njk"
article.data.thumbnail_120w: "no-picture.png"
pagination:
  data: collections.news
  size: 5
  alias: pagedNews
  reverse: true
---

{% for article in pagedNews %}

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

<nav class="mt-3 aria-label="News archive navigation">
  <ul class="pagination justify-content-end">
{% if pagination.previousPageLink %}
  <li class="page-item">
    <a class="page-link" href="{{ pagination.previousPageHref }}" tabindex="-1">Previous</a>
  </li>
{% else %}
  <li class="page-item disabled">
    <a class="page-link" href="{{ pagination.previousPageHref }}" tabindex="-1">Previous</a>
  </li>
{% endif %}
{% if pagination.nextPageLink %}
  <li class="page-item">
    <a class="page-link" href="{{ pagination.nextPageHref}}">Next</a>
  </li>
{% else %}
  <li class="page-item disabled">
    <a class="page-link" href="{{ pagination.nextPageHref}}">Next</a>
  </li>
{% endif %}

  </ul>
</nav>
