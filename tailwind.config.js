/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Nunito", "sans-serif"],
        title: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
