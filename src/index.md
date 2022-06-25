---
title: Precious Ones Ministries
layout: "page.njk"
attribution: Brian Wolfe
---

<div class="container-popout-image bg-homepage"></div>

<div class="row">
<div class="col">


### Our Mission

Through women’s education, sewing opportunities, feminine health and business training, we are empowering women to change their lives, families and their communities.

Through children’s education we will change the trajectory of generations!

We are seeing the transformative power of God’s love and the hope that comes with having an education!

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
  background-image: url("/images/homepage_girllookingback.jpg");
  background-position: top right;
}
</style>
