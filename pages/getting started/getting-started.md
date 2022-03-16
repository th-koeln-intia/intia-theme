---
title: Getting started
subtitle: |
  Start creating your own jekyll site with the INTIA theme!
permalink: /getting-started/
hero_tags: subpage
---

# INTIA theme demo site

A barrier-free design by [INTIA](https://intia.de), created to be used as an Jekyll theme using Bulma.
This site is a demo showcase for the INTIA theme. The theme is available as a ruby gem or can be used with GitHub pages.

[![Gem Version](https://badge.fury.io/rb/intia-theme.svg)](https://badge.fury.io/rb/intia-theme)
![GitHub Repo stars](https://img.shields.io/github/stars/th-koeln-intia/intia-theme?style=social)

## Ruby Gem

The ruby gem is available on the Ruby Gems website at the following location: [https://rubygems.org/gems/intia-theme](https://rubygems.org/gems/intia-theme).

### Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "intia-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: intia-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install intia-theme

## GitHub Pages

The theme can be used with GitHub Pages by setting the `remote_theme` in your Jekyll sites `_config.yml`

```yml
remote_theme: th-koeln-intia/intia-theme
```

## Showcase

This showcase contains the following sections:

- [Getting started](/getting-started/) - How to get started with the theme
- [Showcases](/showcases/) - A variety of Showcases using this theme
- [Headers](/headers/) - A visualisation of the different styles for the header or hero
- [Highlights](/highlights/) - A visualisation of the different styles for the highlights
- [Elements](/elements/) - A visualisation of a variety of elements that are commonly used like buttons

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/th-koeln-intia/intia-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `intia-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
