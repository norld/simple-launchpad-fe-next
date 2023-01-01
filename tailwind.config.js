const defaultColors = require("tailwindcss/colors");

const colors = {
  main: "#ff9e3b",
  border: "#1e2632",
  dark: "#000000",
  light: "#FF4F79",
  bgDark: "#1d2429",
  disabled: "#bba24f42",
  primaryOne: "rgba(230,69,122,1)",
  primaryTwo: "rgba(112,72,154,1)",
  primaryThree: "rgba(174,71,136,1)",
  bgNew: "linear-gradient(319deg, rgba(230,69,122,1) 0%, rgba(112,72,154,1) 35%, rgba(174,71,136,1) 100%)",
  onProgress: "#FF8CA7",
  created: "#731DD8",
};

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
  theme: {
    colors: {
      ...colors,
      ...defaultColors,
    },
    extend: {
      willChange: {
        "earn-card": "transform, opacity",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
};
