/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#07235B",
          900: "#0B3B91",
          800: "#1357BD",
          700: "#1E6EF2",
          600: "#2596FF",
          500: "#4DB4FF",
          400: "#7CCBFF",
          300: "#9FD3FF",
          200: "#CFEAFF",
          100: "#EAF5FF",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #0B3B91, #2596FF, #9FD3FF)",
      },
    },
  },
  plugins: [],
};
