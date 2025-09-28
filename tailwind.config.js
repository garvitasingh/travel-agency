/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",
        secondary: "#90E0EF",
        accent: "#FFD166",
        neutral: "#FAFAFA",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
