/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "##A49889",
        "secondaryColor": "#706456",
        "terciaryColor": "#3E3326",
        "darkColor": "#0C0E0B",
        "lightColor": "#DBDAD8",
        "contrastColor": "#F7CA18"
      },
      fontFamily: {
        destaque: ['Amita', 'cursive']
      }
    },
  },
  plugins: [],
}
