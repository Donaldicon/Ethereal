/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        voltaire: ['Voltaire Frangela'],
        barlow: ['Barlow'],
        poppins: ['Poppins'],
      },
      screens:{
        'desktop': '1400px',
        'bigScreens': '2500px'
      }
    },
  },
  plugins: [],
}