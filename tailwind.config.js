/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        'win11-bg': 'var(--win11-bg)',
        'win11-text': 'var(--win11-text)',
        'win11-accent': 'var(--win11-accent)',
        'win11-accent-hover': 'var(--win11-accent-hover)',
        'win11-border': 'var(--win11-border)',
      },
      boxShadow: {
        'win11': '0 2px 8px var(--win11-shadow)',
      },
    },
  },
  plugins: [],
}