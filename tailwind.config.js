/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#c08c9d",
        primary_pl: "#f4cfdf",
        secondary: "#1e4676",
        secondary_pl: "#1e4676a0",
        secondary_pls: "#1e467630",
        thirth: "#081423",
        thirth_pl: "#081423a0",
        fourth: "#418c9d",
        fourth_pl: "#418c9da0",
      },
    },
    screens: {
      'xxs': '220px',
      'xs': '320px',
      'sm': '455px',
      'md': '768px',
      'xmd': '925px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
