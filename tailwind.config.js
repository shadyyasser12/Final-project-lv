/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Enables class-based dark mode
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],

  theme: {
    extend: {
      colors: {
        "custom-gary": "#dddddd",
        "product-col": "#fbfbfb",
        "new-price": "#ff324d",
        "old-price": "#687188",
        featers: "#292b2c",
        rating: "#f6bc3e",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        snake: "snake 1s ease-in-out infinite",
      },
      keyframes: {
        snake: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [],
};
