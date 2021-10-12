# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "intia-theme"
  spec.version       = "0.1.2"
  spec.authors       = ["Marc Schmidt"]
  spec.email         = ["marc.schmidt1@th-koeln.de"]

  spec.summary       = "A barrier-free design by INTIA, created to be used as an Jekyll theme using Bulma. It can be viewed on theme.intia.de"
  spec.homepage      = "https://theme.intia.de"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_posts|blog|LICENSE|README|package|node_modules|favicon)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
end
