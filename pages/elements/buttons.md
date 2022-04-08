---
title: Buttons
subtitle: |
  Different examples and usge of Buttons
hero_tags: subpage
permalink: /elements/buttons/
---

## Button

{% include button.html label="Button" link="/" %}
{% include button.html label="Button" link="/" type="external" %}
{% include button.html label="Button" link="/" type="download" %}

## Simple Button direct from HTML

This is an example of a button:
<a href="/" class="button is-rounded is-dark {% if item.link == page.url %} is-active {% endif %}">
<span>Example</span>
<span class="icon is-small">
<i class="fas fa-chevron-right"></i>
</span>
</a>

## Adaptable Button

This adapts to the size of its column.

<div class="columns">
    <div class="column is-3">
        <a href="/" class="button is-rounded is-dark {% if item.link == page.url %} is-active {% endif %}">
            <span>Classic button</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
    <div class="column is-3">
        <a href="/" class="button is-rounded {% if item.link == page.url %} is-active {% endif %}">
            <span>With white Background</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
    <div class="column is-3">
        <a href="/" class="button is-dark {% if item.link == page.url %} is-active {% endif %}">
            <span>Without round borders</span>
            <span class="icon is-small">
            <i class="fas fa-chevron-right"></i>
            </span>
        </a>  
    </div>
</div>

## Using buttons

Button is created with an include:

```html
{% raw %}{% include button.html label="Button" link="/" type="external" %}{%
endraw %}
```

Parameters:

- label: The text that is shown in the button
- link: The link where the buttons points towards
- (optional) type: The type of button. Can be: external, download, or internal
- (optional) no-icon: removes the icon altogether

Or directly with html:

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
