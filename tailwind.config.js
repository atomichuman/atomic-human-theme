/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",    // Layouts
    "./_includes/**/*.html",   // Includes like headers and footers

    // Content repo files
    "../atomichuman.github.io/_chapters/**/*.md",
    "../atomichuman.github.io/_themes/**/*.md",
    "../atomichuman.github.io/_reviews/**/*.md",
    "../atomichuman.github.io/_people/**/*.md",
    "../atomichuman.github.io/_bibliography/**/*.md",
    "../atomichuman.github.io/_reflections/**/*.md",
    "../atomichuman.github.io/_images/**/*.md",
    "../atomichuman.github.io/_history/**/*.md",
    "../atomichuman.github.io/_technology/**/*.md",
    "../atomichuman.github.io/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Inspired by the UK book cover
        background: "#0d0d0d", // Rich black background
        text: "#f5f5f5",       // Light gray text
        accent: "#f72585",     // Deep magenta for links and headings
        secondary: "#4cc9f0",  // Cyan for secondary highlights
        highlight: "#ffd700",  // Bright yellow for complementary elements

        // Footer and other dark-themed areas
        footer: {
          background: "#1a1a1a", // Dark gray footer background
          text: "#e0e0e0",       // Light gray footer text
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'], // Elegant for headings
        sans: ['Roboto', 'Arial', 'sans-serif'],         // Clean for body text
      },
    },
  },
  plugins: [],
};
