/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
    }),

    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
