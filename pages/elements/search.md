---
title: Search
permalink: /experimental/search/
---

<!-- Html Elements for Search -->
<div class="field">
  <div id="search-container" class="control">
    <input class="input" type="text" id="search-input" placeholder="Suchbegriff eintippen">
  </div>
</div>
<ul id="results-container"></ul>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<a href="{{ site.url }}{url}">{title}</a>'
})
</script>
