const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#fdf1f5",
        primary_pl: "#fdf1f5a0",
        secondary: "#92736c",
        secondary_pl: "#92736ca0",
        secondary_pls: "#1e467630",
        thirth: "#19485f",
        thirth_pl: "#19485fa0",
        fourth: "#418c9d",
        fourth_pl: "#418c9da0",

        hindra_light: "#F9FCFF",
        hindra_light_pl: "#F9FCFFA0",
        hindra_dark: "#081F5C",
        hindra_dark_pl: "#081F5CA0",
        hindra_link: "#334EAC",
        hindra_link_pl: "#334EACA0",
        hindra_dark_link: "#D0E3FF",
        hindra_dark_link_pl: "#D0E3FFA0",
        hindra_hover: "#E7F1FF",
        hindra_hover_pl: "#E7F1FFA0",
        hindra_link: "#7096D1",
        hindra_link_pl: "#7096D1A0",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",

        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
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
  plugins: [
    flowbite.plugin(),
  ],
}
