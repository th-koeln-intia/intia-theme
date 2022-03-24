---
title: Breadcrumbs
subtitle: |
  Different examples and usge of Buttons
hero_tags: subpage
permalink: /experimental/breadcrumbs/
---

## Breadcrumb with green borders

<section class="breadcrumb-section">
<div class="container breadcrumb-container">
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
<ul>
{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<li><a href="/">INTIA</a></li>
{% for crumb in crumbs offset: 1 %}
{% if forloop.last %}
<li><a href="#">{{ page.title }}</a></li>
{% else %}
<li><a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' | replace:'without-plugin/','without-plugins/' }}{% endfor %}">{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</a></li>
{% endif %}
{% endfor %}
</ul>
</nav>
</div>
</section>

### Usage

```html
To be done
```

## Breadcrumb with green background

<section class="breadcrumb-section green-version">
<div class="container breadcrumb-container">
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
<ul>
{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<li><a href="/">INTIA</a></li>
{% for crumb in crumbs offset: 1 %}
{% if forloop.last %}
<li><a href="#">{{ page.title }}</a></li>
{% else %}
<li><a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' | replace:'without-plugin/','without-plugins/' }}{% endfor %}">{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</a></li>
{% endif %}
{% endfor %}
</ul>
</nav>
</div>
</section>

### Usage

```html
To be done
```

## Breadcrumb with dark green background

<section class="breadcrumb-section dark-green-version">
<div class="container breadcrumb-container">
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
<ul>
{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<li><a href="/">INTIA</a></li>
{% for crumb in crumbs offset: 1 %}
{% if forloop.last %}
<li><a href="#">{{ page.title }}</a></li>
{% else %}
<li><a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' | replace:'without-plugin/','without-plugins/' }}{% endfor %}">{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</a></li>
{% endif %}
{% endfor %}
</ul>
</nav>
</div>
</section>

### Usage

```html
To be done
```

## Breadcrumb with green background and symbols

<section class="breadcrumb-section green-version">
<div class="container breadcrumb-container">
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
<ul>
{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<li><a href="/">
<span class="icon is-small">
<i class="fas fa-home" aria-hidden="true"></i>
</span>
<span>INTIA</span>
</a></li>
{% for crumb in crumbs offset: 1 %}
{% if forloop.last %}
<li><a href="#">
<span class="icon is-small">
<i class="fas fa-thumbs-up" aria-hidden="true"></i>
</span>
<span>{{ page.title }}</span>
</a></li>
{% else %}
<li><a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' | replace:'without-plugin/','without-plugins/' }}{% endfor %}">
<span class="icon is-small">
<i class="fas fa-puzzle-piece" aria-hidden="true"></i>
</span>
<span>{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</span>
</a></li>
{% endif %}
{% endfor %}
</ul>
</nav>
</div>
</section>

### Usage

```html
To be done
```
