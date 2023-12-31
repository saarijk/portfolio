/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#060836"
      },
      fontFamily: {
        rock: ['Rock Salt', 'cursive'],
        barlow: ['Barlow Condensed', 'sans-serif'],
        nothing: ['Nothing You Could Do', 'cursive'],
        roboto: ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
};
