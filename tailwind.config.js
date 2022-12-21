/** @type {import('tailwindcss').Config} */

const tokens = require('./data/output')
console.log(tokens)

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
      primary: tokens['color-primary-base'].value,
      'white': '#ffffff',
      'grey': 'rgb(200,200,200)',
    },
    extend: {
      spacing: {
        s: `${tokens['spacing-s'].value}px`,
        m: `${tokens['spacing-m'].value}px`,
        l: `${tokens['spacing-l'].value}px`,
        xl: `${tokens['spacing-xl'].value}px`,
        '2xl': `${tokens['spacing-2xl'].value}px`,
        '3xl': `${tokens['spacing-3xl'].value}px`,
      },
      fontSize: {
        s: `${tokens['font-size-s'].value}px`,
        m: `${tokens['font-size-m'].value}px`,
        l: `${tokens['font-size-l'].value}px`,
      }
    },
  },
  plugins: [],
}
