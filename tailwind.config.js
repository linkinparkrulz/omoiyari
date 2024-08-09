const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      current: 'currentColor',
      primary: '#c5c6c6',
      secondary: '#c12727',
      tertiary: '#f8f8f8',
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    fontFamily: {
      'space-mono': ['Space Mono', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
