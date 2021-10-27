---
title: Highlighter
subtitle: |
  A variety of different elements to highlight important aspects, summaries and more.
permalink: /highlighter/
hero_tags: subpage
---

# Highligher A

A two column highlighter.

## Example:

{% include highlighter.html two-columns=true content="

## Lorum ipsum

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

"%}

## How to Use it

Calling the 'highlighter.html' include with the parameter 'two-columns'.

```html
{% raw %} {% include highlighter.html two-columns=true content="Lorum ipsum
Lorem ipsum dolor sit amet"%} {% endraw %}
```

# Highligher B

A highlighter with read more button.

## Example:

{% include highlighter.html button="More" content="

## Lorum ipsum

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

"%}

## How to Use it

Calling the 'highlighter.html' include with the parameter 'button' that contains the button label as value.

```html
{% raw %} {% include highlighter.html button="More" content=" Lorum ipsum Lorem
ipsum dolor sit amet"%} {% endraw %}
```

# Highligher C

A highlighter with Image Text-Aligment Right.

## Example:

{% include highlighter.html min-height25p=true content="

## Lorum ipsum

<img src='https://via.placeholder.com/1000x500'>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

"%}

## How to Use it

Calling the 'highlighter.html' include with the 'min-height25p' set sets the css class with the same name.

```html
{% raw %} {% include highlighter.html min-height25p=true content=' Lorum ipsum

<img src="https://via.placeholder.com/1000x500" />
Lorem ipsum dolor sit amet'%} {% endraw %}
```

# Highligher D

A highlighter with more content, for example introduction cards.

## Example:

{% include highlighter.html content='

# Lorum ipsum

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.

  <a href="#" class="button is-rounded is-dark">
      <span class="icon is-small">
        <i class="fas fa-chevron-right fa-xs"></i>
      </span>
      <span>Text</span>
  </a>
  <div class="clear"></div>

<div class="columns">       
  <div class="column is-4 is-round is-centered">
    <img src="https://via.placeholder.com/800x800" alt="placeholder" class="">
  </div>
<div class="column">

## Lösungen

Ideen für technik-bezogene Alltagsprobleme als erste Prototypen: Building Blocks zum Nachbau von Prototypen oder Weiterverwendung sowie ein Baukasten (Toolkit) zur Bedarfserhebung.

  <a href="#" class="button is-rounded is-dark">
      <span>Text</span>
      <span class="icon is-small">
        <i class="fas fa-chevron-right fa-xs"></i>
      </span>
  </a>
  <div class="clear"></div>                          
  </div>
  </div>

  <div class="columns">       
  <div class="column is-4 is-round is-centered">
    <img src="https://via.placeholder.com/800x800" alt="placeholder" class="">
  </div>
<div class="column">

## Lösungen

Ideen für technik-bezogene Alltagsprobleme als erste Prototypen: Building Blocks zum Nachbau von Prototypen oder Weiterverwendung sowie ein Baukasten (Toolkit) zur Bedarfserhebung.

  <a href="#" class="button is-rounded is-dark">
      <span>Text</span>
      <span class="icon is-small">
        <i class="fas fa-chevron-right fa-xs"></i>
      </span>
  </a>
  <div class="clear"></div>                          
  </div>
  </div>

'%}

## How to Use it

Just calling the 'highlighter.html' include and setting the content self. Reminder: look out for single and double qoute when writing the content.

```html
{% raw %} {% include highlighter.html content=' Lorum ipsum Lorem ipsum dolor
sit amet, consetetur sadipscing elitr'%} {% endraw %}
```
