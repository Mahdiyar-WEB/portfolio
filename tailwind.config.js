/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
      fontFamily: {
        sans: ["var(--font-visby)", "ui-sans-serif"],
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
        wave: "animatedwave 2.5s ease infinite alternate",
        toggle: "animatetoggle .5s linear infinite",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        animatedwave: {
          "0%": { transform: "rotate( 0.0deg)" },
          "10%": {
            transform: "rotate(14deg)",
          },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": {
            transform: "rotate(0deg)",
          },
          "100%": { transform: "rotate(0deg)" },
        }
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
