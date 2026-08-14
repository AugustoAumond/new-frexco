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
        primaryColor2: '#18372c',
        secundaryColor1: '#f6f8f2',
        secundaryColor2: '#f6aa3c',
      },
      fontFamily: {
        primaryFont: 'caveat'
      }
    },
  },
  plugins: [],
}
