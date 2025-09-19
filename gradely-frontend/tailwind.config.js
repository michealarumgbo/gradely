/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        gradely: {
          neutral: "#3d4451",
          "base-100": "#ffffff", // 👈 background
          "base-200": "#f9fafb", // slightly lighter backgrounds
          "base-300": "#e5e7eb",
        },
      },
    ],
  },
};
