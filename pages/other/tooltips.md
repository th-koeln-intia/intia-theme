---
title: Tooltips
title_above: Other
subtitle: |
  Tooltips on hover. In this theme it is used for glossary entries.
permalink: /tooltips/
hero_tags: subpage
---

<div class="tooltip-popup visible">

### top-title
## Title
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam

</div>

<br>

<a>
    My Cool Link
    <div class="tooltip-popup">
    <h3> Top-Title </h3>
    <h2> Titel </h2>
        <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
    </div>
</a>
<br>
<br>


As part of a button:

<a href="/" class="button is-rounded is-dark {% if item.link == page.url %} is-active {% endif %}" data-tooltip="Tooltip Text">
<span>Example</span>
<span class="icon is-small">
<i class="fas fa-chevron-right"></i>
</span>
</a>
</br>
In a text:

Lorem ipsum dolor sit amet, consetetur <span data-tooltip="Tooltip Text">sadipscing</span> elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Should look like this:

<figure class="image">
  <img src="{{baseurl}}/assets/templates/tooltip.png">
</figure>
