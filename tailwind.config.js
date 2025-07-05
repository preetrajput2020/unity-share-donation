/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: {
          "100": "#bfe68c",
          "200": "rgba(191, 230, 140, 0.6)",
          "300": "rgba(191, 230, 140, 0.5)",
        },
        olivedrab: "#5a911f",
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(24, 41, 10, 0.4)",
          "300": "rgba(30, 30, 30, 0.5)",
        },
        whitesmoke: "#f5f5f5",
        midnightblue: "#000c37",
        black: "#000",
        lightgoldenrodyellow: "#e8f6d1",
        gainsboro: "#d9d9d9",
        white: "#fff",
        yellowgreen: "#95d14a",
        dimgray: "#656565",
        "web-tertiary": "#c76b98",
      },
      spacing: {},
      fontFamily: {
        "web-para-reg-03": "Prompt",
        "style-script": "'Style Script'",
        inter: "Inter",
      },
      borderRadius: {
        "31xl": "50px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      base: "1rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
