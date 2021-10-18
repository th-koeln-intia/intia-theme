---
title: Buttons
permalink: /buttons/
---

This is an example of a button:
<a href="/" class="navbar-item button is-rounded is-dark {% if item.link == page.url %} is-active {% endif %}">
<span>Test</span>
<span class="icon is-small">
<i class="fas fa-chevron-right"></i>
</span>
</a>  
This adapts to the size of its column.

<div class="columns">
    <div class="column is-3">
        <a href="/" class="button is-rounded is-dark {% if item.link == page.url %} is-active {% endif %}">
            <span>Example</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
    <div class="column is-3">
        <a href="/" class="button is-rounded {% if item.link == page.url %} is-active {% endif %}">
            <span>Example</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
    <div class="column is-3">
        <a href="/" class="button is-dark {% if item.link == page.url %} is-active {% endif %}">
            <span>Example</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
</div>

A button is created with:

```html
<a
  href="{{ section.link | relative_url }}"
  class="button is-rounded is-dark { % if item.link == page.url % } is-active { % endif % }"
>
  <span>Example</span>
  <span class="icon is-small">
    <i class="fas fa-chevron-right"></i>
  </span>
</a>
```
