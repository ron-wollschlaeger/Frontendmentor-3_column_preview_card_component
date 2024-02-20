/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      title: ["Big Shoulders Display", "sans-serif"],
      body: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
