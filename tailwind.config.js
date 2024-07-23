/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#8d9f84",
        "secondaryColor": "#232920",
        "terciaryColor": "#53330c",
        "darkColor": "#0C0E0B",
        "lightColor": "#DBDAD8",
        "ultraLightColor": "#ffffff1a",
        "contrastColor": "#F7CA18",
        "backgroundModal": "#000000c4"
      },
      fontFamily: {
        
      },
      fontSize: {
        "3xl": "2.125rem"
      }
    },
  },
  plugins: [],
}