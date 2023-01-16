/* @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-00': '#1F2326',
        'c-01': '#05C2FC',
        'c-02': '#0DF8CF',
        'c-03': '#D8DDDF',
        'c-04': '#0F7A9B00',
        'bg-00': '#304352',
        'bg-01': '#252E37',
        'bg-02': '#242B32',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        flicker: {
          '0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%': { fill: 'white' },
          '20%, 21.9%, 63%, 63.9%, 65%, 69.9%': { fill: '#d3d3d3' },
        },
        flickerLight: {
          '0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%': { stopOpacity: '1' },
          '20%, 21.9%, 63%, 63.9%, 65%, 69.9%': { stopOpacity: '0' },
        },
        flickerBgCenter: {
          '0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%': { stopColor: '#08D8EA' },
          '20%, 21.9%, 63%, 63.9%, 65%, 69.9%': { stopColor: '#05c2fc' },
        },
        flickerBgEnd: {
          '0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%': { stopColor: '#0DF8CF' },
          '20%, 21.9%, 63%, 63.9%, 65%, 69.9%': { stopColor: '#05c2fc' },
        },
      },
    },
  },
  plugins: [],
}
