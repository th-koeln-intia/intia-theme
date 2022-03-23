---
title: Radar
subtitle: |
  A radar chart to visualize data. Used for the categorization of methods in INTIA.
hero_tags: subpage
permalink: /radar/
---

<div id="radar"></div>

<script>
let config = {{ site.data.radar-config | jsonify }};
let structure = {{ site.data.radar-structure | jsonify }};
let entries = {{ site.data.radar-entries | jsonify }}; 
createRadar(config, structure, entries);
</script>
