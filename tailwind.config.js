/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "bg-gray-very-light": "#FAFAFA",
        "bg-gray-light-medium": "#EDEDED",
        "bg-amber-dark": "#BEAF7C",
        "bg-gray-200-custom": "#EBEBEB",
      },
      container: {
        center: "true",
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
