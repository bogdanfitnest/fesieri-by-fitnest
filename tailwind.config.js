/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0D12',
        champagne: '#D4AF37', /* Adjusted to match the specific gold/mustard from screenshot */
        ivory: '#FAF8F5',
        slate: '#2A2A35',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        drama: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
    },
  },
  plugins: [],
}
