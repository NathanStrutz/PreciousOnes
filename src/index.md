---
title: Precious Ones Ministries
tabTitle:
layout: "page-fluid.njk"
attribution: Brian Wolfe
---

<div class="container-popout-image bg-homepage"></div>

<div class="row">
<div class="col ms-md-4">

### What is Precious Ones?

Precious Ones is a non-profit organization dedicated to working with communities to remind women of their worth and encourage sustainability. We are committed to make a difference through

- Women's education
- Sewing opportunities
- Feminine health
- Business training
- Children's education

We are empowering women to change their lives, families and their communities for generations!

Through children's education we will change the trajectory of generations!

We are seeing the transformative power of God's love and the hope that comes with having an education!

</div>
<div class="col-md-5 col-lg-4">

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
  background-position: top 10% right 25%;
}
</style>
