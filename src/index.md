---
title: Precious Ones Ministries
layout: "page.njk"
---

### Our Mission

Empowering women through education: our classes on sewing, feminine health, and business training are helping women to see their value and worth.

Precious ones is coming alongside women to embrace independence, know God's love, and create communities that value one another and their sisters around the world.

{% for article in collections.topNews %}

- [{{ article.data.title }}]({{ article.url }})
  {% endfor %}
