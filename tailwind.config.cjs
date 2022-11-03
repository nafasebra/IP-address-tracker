/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light': '#f5f5f5',
        'purple': '#8C3AFD',
        'pink': '#E342FF',
      },
      boxShadow: {
        'card': '0 2px 15px #382AE150',
      },
      backgroundImage: {
        'header': "url('../src/assets/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
