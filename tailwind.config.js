/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Utils/**/*.{js,jsx,ts,tsx}",

  ],
  plugins: [

  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},
      },
  },
  plugins: [],
}