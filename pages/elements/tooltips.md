---
title: Tooltips
title_above: Other
subtitle: |
  Tooltips on hover. In this theme it is used for glossary entries.
permalink: /tooltips/
hero_tags: subpage
---

## Sample usage of a tooltip

<a href="{{ entry.url | relative_url }}" class="tooltip-link">
    A link with tooltip
    <div class="tooltip-popup">
    <h4 class="overtitle"> Top-Title </h4>
    <h2> Titel </h2>
        <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
        <div class="button float_right is-rounded has-text-centert is-dark {% if item.link == page.url %}is-active{% endif %}">
          <span>Mehr lesen</span>
          <span class="icon is-small">
          <i class="fas fa-chevron-right fa-xs"></i>
          </span>
        </div> 
    </div>
</a>
<br>
<br>

<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>


## As part of a text

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## Should look like this:

<figure class="image">
  <img src="{{baseurl}}/assets/templates/tooltip.png">
</figure>
