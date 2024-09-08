/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueviolet: '#8a2be2', 
      },
      borderRadius: {
        'buttonradius': '36px',
      }
    },
  },
  plugins: [],
}