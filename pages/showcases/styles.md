---
title: (H1) Styles
title_above: (H5) Showcases
permalink: /showcases/styles/
subtitle: |
  (H4) Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
hero_tags: toppage
---

<a id="changeFontsize" class="button is-rounded is-dark">
  <span>Change Fontsize</span>
</a>
<h2>(H2) Body</h2>
(Body, Standard) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula neque, volutpat eget interdum nec, ultrices ac magna. Etiam laoreet nisl faucibus massa rhoncus sollicitudin. Cras ac quam pretium, posuere nulla sagittis, feugiat sapien. Nulla a risus at magna ornare cursus nec eu massa.

Vivamus sed lacus nec nisl sagittis convallis. Nunc molestie ligula eget diam molestie, et porttitor sem tempor. Curabitur at dignissim mi. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ac efficitur ante. Nullam sem massa, ornare ut ex ac, fermentum tempor nunc. Etiam semper magna vel lacinia ultricies.

<br>
(Body, Bold)
<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula neque, volutpat eget interdum nec, ultrices ac magna. Etiam laoreet nisl faucibus massa rhoncus sollicitudin. Cras ac quam pretium, posuere nulla sagittis, feugiat sapien. Nulla a risus at magna ornare cursus nec eu massa.</strong>

<h1>(H1) Headline 1</h1>
<h1 class="turquoise">(H1, Turquoise) Headline 2</h1>
<h2>(H2) Headline 3</h2>
<h2 class="has-text-left">(H2) Headline 4</h2>
<h3>(H3) Headline 5</h3>
<h4 class="turquoise">(H4) Subhead 1</h4>
<h4>(H4) Subhead 2</h4>
<h5>(H5) Subhead 3</h5>
<h6>(H6) Subhead 4</h6>
<h7>(H7) Dates</h7>
<h2>(H2) Button</h2>
<br>
{% include button.html label="Button" link="/" type="external" %}

<h2>(H2) Breadcrumb</h2>
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
