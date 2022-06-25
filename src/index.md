---
title: Precious Ones Ministries
layout: "page.njk"
attribution: Brian Wolfe
---

<div class="container-popout-image bg-homepage"></div>

<div class="row">
<div class="col">


### Our Mission

Empowering women through education: our classes on sewing, feminine health, and business training are helping women to see their value and worth.

Precious ones is coming alongside women to embrace independence, know God's love, and create communities that value one another and their sisters around the world.

</div>
<div class="col-4">

### Recent News


{% for article in collections.topNews %}

<div class="news-link-area">
  <em class="small date">{{ article.date | newsDate }}</em>

  <article class="news-link-article" onclick="location.href='{{ article.url }}';">
    <img src="/images/news/{{ article.data.thumbnail_120w }}" class="news-thumbnail" />
    <div class="news-link-text">
      <a href="{{ article.url }}">{{ article.data.title }}</a>
      <em>{{ article.data.description }}</em>
    </div>
  </article>
</div>

{% endfor %}

[news archive](/news)

</div>
</div>


<style>
.bg-homepage {
  background-image: url("/images/mightyboybrian-6835016251_1080.jpg");
  background-position: top right;
}
</style>
