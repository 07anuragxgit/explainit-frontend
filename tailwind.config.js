/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
