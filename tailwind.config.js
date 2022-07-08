const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,ts,json}'],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  variants: {
    backgroundColor: ['hover', 'focus'],
    borderColor: ['focus', 'hover'],
    animation: ['hover', 'focus']
  }
}