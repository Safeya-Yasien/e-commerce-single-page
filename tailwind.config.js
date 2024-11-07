/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "gray-very-light": "#FAFAFA",
        "gray-light-medium": "#EDEDED",
        "amber-dark": "#BEAF7C",
        "gray-200-custom": "#EBEBEB",
      },
      container: {
        center: "true",
        padding: "1rem",
      },
      boxShadow: {
        custom: "0 4px 6px #00000017",
      },
    },
  },
  plugins: [],
};
