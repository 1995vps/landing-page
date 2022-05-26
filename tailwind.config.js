const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix:'inv-',
  darkMode: 'media',
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
