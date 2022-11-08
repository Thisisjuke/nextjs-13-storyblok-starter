const defaultTheme = require('tailwindcss/defaultTheme')

const THEME_COLORS = {
  primary: '#2b2d42',
  secondary: '#8d99ae',
  accent: '#ef233c',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...THEME_COLORS,
      },
      fontFamily: {
        inter: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
