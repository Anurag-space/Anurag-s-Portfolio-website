/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        yellow: '#FDCC49',
        grey: '#ededed',
        'dark-grey': '#757575',
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        red: '#DC4492',
        'opaque-black': 'rgba(0,0,0,0.35)',
        'dark-purple': '#330044',
        'dark-blue': '#00B5EE',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },

      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
        'hero-pattern': "url('/src/assets/herobg.png')",
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
