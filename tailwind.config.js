module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        '3xl': '1920px', 
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #EA4335, #CC0000)',
      },
    },
  },
  plugins: [],
}
