Gem::Specification.new do |s|
  s.name        = "atomic-human-theme"
  s.version     = "0.1.0"
  s.authors     = ["Your Name"]
  s.email       = ["your-email@example.com"]
  s.summary     = "A custom Jekyll theme for The Atomic Human"
  s.description = "A modular Jekyll theme designed for content-heavy websites with Tailwind CSS."
  s.license     = "MIT"

  s.files       = Dir["**/*"].reject { |f| f.include?("node_modules") }
  s.add_dependency "jekyll", "~> 4.3"
end
