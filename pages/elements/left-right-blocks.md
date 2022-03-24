---
title: Left-Right blocks
subtitle: |
  A simple layout with cards that are swapping image and content with each entry.
permalink: /elements/left-right-blocks/
hero_tags: subpage
left_right_layout: left-right-demo
---

## How it works:

Blocks in a left-schema can be added with the meta-tag 'left_right_layout' and the information can be provided through a reference file.
Example tag:

```html
left_right_layout: left-right-demo
```

left-right-demo.yml in \_data folder:

```yaml
style: landing-page-main-content
sections:
  - title: Lorem Ipsum
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non enim dolor. Pellentesque eget eros blandit, imperdiet metus id, sagittis dolor.
    image: https://via.placeholder.com/1200x800
    icon: fa-tools
    link: /
    link_text: More
  - title: Lorem Lipsum
    text: |
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non enim dolor. Pellentesque eget eros blandit, imperdiet metus id, sagittis dolor.
    image: https://via.placeholder.com/1200x800
    icon: fa-key
    link: /
    link_text: Read more
```
