/** @type {import('tailwindcss').Config} */

const tokens = require('./styles/_generated/json/styles.json')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['AktivGrotesk', 'sans-serif'],
    },
    colors: {
      'white': '#ffffff',
    },
    extend: {
      spacing: {
        s: `12px`,
      },
    },
  },
  plugins: [],
}
