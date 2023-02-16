/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      grayText: '#B6B6B6',
      customRed: '#AE0000',
      customGreen: '#0FAE96',
      white: colors.white,
      black: colors.black,
      green: colors.green,
      gray: colors.gray,
    },
    extend:
    {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [],
}