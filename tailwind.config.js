/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        yellow: {
          lab: "#ffff07",
          generic: "#ffff00",
        },
        blue: {
          lab: "#7070ff",
          generic: "#0000ff",
        },
        red: {
          lab: "#ff7070",
          generic: "#ff0000",
        },
        green: {
          generic: "#00ff00",
        },
        bsprimary: "#0d6efd",
        bssecondary: "#6c757d",
        bssuccess: "#198754",
        bsinfo: "#0dcaf0",
        bswarning: "#ffc107",
        bsdanger: "#dc3545",
        bslight: "#f8f9fa",
        bsdark: "#212529",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
