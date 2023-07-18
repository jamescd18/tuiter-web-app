/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          lab: "#ffff07",
          generic: colors.yellow,
        },
        blue: {
          lab: "#7070ff",
          generic: colors.blue,
        },
        red: {
          lab: "#ff7070",
          generic: colors.red,
        },
        green: {
          generic: colors.green,
        },
      },
    },
    plugins: [],
  },
};
