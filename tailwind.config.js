/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        darkBlueDarkModeEL: "hsl(209, 23%, 22%)",
        veryDarkBlueDarkModeBg: "hsl(207, 26%, 17%)",
        veryDarkBlueLightModeText: "hsl(200, 15%, 8%)",
        whiteDarkModeTextAndLightModeEl: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
