/** @type {import('tailwindcss').Config} */
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
    plugins: [],
  },
};
