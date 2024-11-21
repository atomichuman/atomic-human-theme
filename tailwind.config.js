/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./_layouts/**/*.html",    // Layouts
      "./_includes/**/*.html",   // Includes like headers and footers

      // Content repo files
      "../atomichuman.github.io/_chapters/**/*.md",     // Markdown files in chapters collection
      "../atomichuman.github.io/_themes/**/*.md",       // Markdown files in themes collection
      "../atomichuman.github.io/_reviews/**/*.md",      // Markdown files in reviews collection
      "../atomichuman.github.io/_people/**/*.md",       // Markdown files in people collection
      "../atomichuman.github.io/_bibliography/**/*.md", // Markdown files in bibliography collection
      "../atomichuman.github.io/_reflections/**/*.md",  // Markdown files in reflections collection
      "../atomichuman.github.io/_images/**/*.md",       // Markdown files in images collection
      "../atomichuman.github.io/_history/**/*.md",      // Markdown files in history collection
      "../atomichuman.github.io/_technology/**/*.md",   // Markdown files in technology collection
      "../atomichuman.github.io/**/*.html",             // Any other HTML files in the project
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ff9a8b',
          purple: '#a18cd1',
          blue: '#fecfef',
          orange: '#fbc2eb',
        },
        dark: {
          background: '#1a202c',
          text: '#e2e8f0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      gradients: {
        circular: ['from-pink-300 via-purple-200 to-blue-200'],
      }
    },
  },
  plugins: [],
};
