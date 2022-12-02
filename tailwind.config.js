/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Baloobhai2: ["Baloo Bhai 2", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
        Ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
