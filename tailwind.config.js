/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#242f66",
          secondary: "#7183e0",
          accent: "#1534cb",
          neutral: "#1a1d33",
          "base-100": "#f1f2f8",
        },
        dark: {
          primary: "#99a4db",
          secondary: "#1f318f",
          accent: "#3350e9",
          neutral: "#1a1d33",
          "base-100": "#07080e",
        },
      },
    ],
  },
};
