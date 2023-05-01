/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)"
          },
          "50%": {
            transform: "scaleY(1.5)"
          }
        }
      },
      //create the actual animation - will create new class name called animate-wavey
      animation: {
        wavey: "wavey 1000ms linear infinite"
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/outlineSolid"),
    require("./plugins/tableCaption.js"),
    require("./plugins/buttonPlugin"),
  ],
};


