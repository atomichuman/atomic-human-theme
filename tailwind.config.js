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
        // Updated neutral palette for better readability
        background: '#f7f7f7',  // Soft off-white background
        text: '#1a1a1a',        // Dark gray text for readability
        accent: '#374151',      // Muted gray for headers and accents
        
        // Softer pastel tones inspired by the original but toned down
        pastel: {
          pink: '#f9c8c8',      // Softer pink for subtle accents
          purple: '#d1c4e9',    // Muted lavender for secondary highlights
          blue: '#a7d8ff',      // Subtle blue for links and buttons
          orange: '#ffd8b1',    // Light orange for complementary elements
        },
        
        // For footer and other dark-themed areas
        dark: {
          background: '#2d3748', // Dark slate background
          text: '#e2e8f0',       // Light text for contrast
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'], // For headings
        sans: ['Roboto', 'Arial', 'sans-serif'],         // For body text
      },
      gradients: {
        circular: ['from-pastel-pink via-pastel-purple to-pastel-blue'],
      }
    },
  },
  plugins: [],
};
