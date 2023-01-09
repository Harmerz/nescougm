/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    colors: {
      'c-00': '#1F2326',
      'c-01': '#05C2FC',
      'c-02': '#0DF8CF',
      'c-03': '#D8DDDF',
      'bg-00': '#304352',
      'bg-01': '#252E37',
    },
    fontFamily: {
      poppins: ['Poppins', ..._fontFamily.sans],
    },
  },
}
export const plugins = []
