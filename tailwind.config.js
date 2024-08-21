/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor1: '#C0CFB2',
      },
      fontFamily: {
        primaryFont: 'caveat'
      }
    },
  },
  plugins: [],
}