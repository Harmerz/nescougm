/* @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
// const defaultTheme = require('tailwindcss/defaultTheme')

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
        'c-05': '#2B3A46',
        'bg-00': '#304352',
        'bg-01': '#252E37',
        'bg-02': '#242B32',
        'bg-03': '#1E2126',
        'bg-04': '#22292F',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        flicker: {
          '0%, 19.9%, 25%, 62.9%, 65%, 65.9%, 70%, 100%': { fill: 'white' },
          '20%, 24.9%, 63%, 64.9%, 66%, 69.9%': { fill: '#d3d3d3' },
        },
        flickerLight: {
          '0%, 20.7%, 25%, 63.7%, 65%, 66.7%, 70%, 100%': { stopOpacity: '1' },
          '20.8%, 24.9%, 63.8%, 64.9%, 66.8%, 69.9%': { stopOpacity: '0' },
        },
        flickerBgStart: {
          '0%, 19.9%, 25%, 62.9%, 65%, 65.9%, 70%, 100%': { stopColor: '#05C2FC' },
          '20%, 24.9%, 63%, 64.9%, 66%, 69.9%': { stopColor: '#037497' },
        },
        flickerBgCenter: {
          '0%, 19.9%, 25%, 62.9%, 65%, 65.9%, 70%, 100%': { stopColor: '#08D8EA' },
          '20%, 24.9%, 63%, 64.9%, 66%, 69.9%': { stopColor: '#037497' },
        },
        flickerBgEnd: {
          '0%, 19.9%, 25%, 62.9%, 65%, 65.9%, 70%, 100%': { stopColor: '#0DF8CF' },
          '20%, 24.9%, 63%, 64.9%, 66%, 69.9%': { stopColor: '#037497' },
        },
      },
    },
  },
  plugins: [],
}
