# Atomic Human Theme

The **Atomic Human Theme** is a custom Jekyll theme designed for Neil D. Lawrence's *The Atomic Human* project. It provides a modern, minimalist design built with Tailwind CSS, focusing on readability and modular content organization. This theme is used as a remote theme, making it easy to integrate into Jekyll-based websites.

## Features

- Tailwind CSS for responsive, customizable styling.
- Modular layouts for chapters, themes, reviews, reflections, and more.
- Integration with custom collections like `people`, `history`, and `technology`.
- Dynamic metadata for contributions, supporting both machine- and human-generated content.
- Lightweight and optimized for content-heavy sites.
- Makefile support for automating CSS builds and other tasks.

---

## Installation

To use the Atomic Human Theme as a remote theme in your Jekyll project:

1. Add the theme to your `_config.yml`:
   ```
   remote_theme: atomichuman/atomic-human-theme@main
   '''

2. Install the `jekyll-remote-theme` plugin in your content repository's `Gemfile`:
   ```
   gem "jekyll-remote-theme"
   '''

3. Run `bundle install` to install the plugin.

4. Customize your content repository as needed, leveraging the layouts and includes provided by this theme.

---

## Layouts

The following layouts are available in the theme:

- `default.html`: The base layout for all pages.
- `chapter.html`: Layout for chapters with summaries, reflections, and bibliographies.
- `review.html`: Layout for reviews (human or machine-generated).
- `reflection.html`: Layout for individual reflections.
- `theme.html`: Layout for exploring specific themes.
- `person.html`: Layout for individuals mentioned in the project.
- `history.html`: Layout for historical events.
- `technology.html`: Layout for technology-related entries.

Each layout can be extended and customized based on the project’s needs.

---

## Includes

The theme provides reusable includes for common components:

- `header.html`: Site header.
- `footer.html`: Site footer.
- `contribution.html`: Contribution metadata (e.g., human or machine-generated content).

---

## Recompiling the CSS with Makefile

This theme uses Tailwind CSS for styling. To make the workflow easier, a **Makefile** is included to handle CSS builds and related tasks.

### Prerequisites

1. **Install Node.js and npm**:
   - Download and install from [Node.js](https://nodejs.org/).

2. **Ensure Make is Installed**:
   - Make is typically preinstalled on macOS and Linux. For Windows, you can use [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm) or WSL.

### Makefile Commands

The following tasks are available via the Makefile:

#### Install Dependencies
```
make install
'''
Installs all required Node.js dependencies.

#### Build CSS
```
make build
'''
Compiles the CSS using Tailwind. Outputs the generated `styles.css` file to `assets/css`.

#### Watch for Changes
```
make watch
'''
Automatically rebuilds the CSS whenever changes are made to `tailwind.css` or other relevant files.

#### Clean Generated CSS
```
make clean
'''
Deletes the compiled `styles.css` file.

#### Rebuild from Scratch
```
make rebuild
'''
Runs a full rebuild by cleaning the previous CSS file and then building a fresh one.

---

## Development Workflow

### Local Testing
To test the theme locally, you can link it to a Jekyll project:

1. Clone the theme repository and the content repository.
2. In the content repository’s `Gemfile`, reference the local theme:
   ```
   gem "atomic-human-theme", path: "../atomic-human-theme"
   '''
3. Run the local Jekyll server:
   ```
   bundle exec jekyll serve
   '''

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a feature branch:
   ```
   git checkout -b feature-name
   '''
3. Make your changes and update `styles.css` if necessary (using `make build`).
4. Submit a pull request.

---

## License

This theme is open source and licensed under the MIT License.
