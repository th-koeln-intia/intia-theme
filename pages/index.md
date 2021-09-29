---
title: Willkommen auf INTIA
subtitle: |
  Kurze Beschreibung Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
hero_image: https://via.placeholder.com/440x638
hero_link: /about/
hero_link_text: Mehr über INTIA
permalink: /
---
<div class="green"></div>

<div class="card">

# Schnelleinstieg
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis ut augue id consequat. Mauris a nunc eget augue condimentum egestas et non ex. Suspendisse vulputate semper cursus. Morbi at sodales augue. Nulla ac dolor ligula. Nam nec viverra velit. Duis sodales nisl non leo fermentum, et iaculis arcu congue. Aliquam erat volutpat. Maecenas pretium libero nisl, sed ultrices sem commodo id. Morbi porttitor sem non fringilla maximus. Aliquam in odio eget urna fringilla pellentesque id sit amet ligula.
</div>

<div class="card">
  <div class="card-image left">
    <figure class="image">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
        <h2>Werkzeuge</h2>
      Morbi at sodales augue. Nulla ac dolor ligula. Nam nec viverra velit. Duis sodales nisl non leo fermentum, et iaculis arcu congue. Aliquam erat volutpat. Maecenas pretium libero nisl, sed ultrices sem commodo id. Morbi porttitor sem non fringilla maximus.
      <a href="{{ item.link | relative_url }}"
                    class="navbar-item button is-rounded is-dark {% if item.link == page.url %}is-active{% endif %}">Zu den Werkzeugen ></a>
  </div>
</div>

<div class="card">
  <div class="card-image right">
    
  </div>
  <div class="card-content">
  <figure class="image">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" class="right">
    </figure>
        <h2>Lösungen</h2>
      Nunc quis nisi quis velit consequat ultrices. Vivamus vel purus ac tortor venenatis convallis. Donec tempus, felis non ultricies congue, odio lorem luctus augue, nec iaculis sem sapien at turpis.
      <a href="{{ item.link | relative_url }}"
                    class="navbar-item button is-rounded is-dark {% if item.link == page.url %}is-active{% endif %}">Zu den Lösungen ></a>
  </div>
</div>

<div class="card">   
  <div class="card-content left">
  <figure class="image">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
        <h2>Wissen</h2>
     Quisque a sagittis eros. Praesent sagittis, lacus a pellentesque gravida, ipsum lorem tincidunt libero, imperdiet auctor sapien nisl ac tellus. Praesent ut tortor orci. Curabitur blandit hendrerit mauris ut dignissim.
      <a href="{{ item.link | relative_url }}"
                    class="navbar-item button is-rounded is-dark {% if item.link == page.url %}is-active{% endif %}">{{ item.name }}</a>
  </div>
</div>
