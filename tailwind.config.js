const rem = (val, base = 16) => `${val / base}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        xsm: "410px",
        sm: "767px",
        md: "768px",
        lg: "1024px",
      },
      boxShadow: {
        dim: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
        slugActive: "5px 0 5px -1.8px #8167a9;",
      },
      width: {
        6.4375: rem(103),
        0.313: rem(5),
      },
      padding: {
        4.094: rem(65.5),
        0.125: rem(2),
      },
      margin: {
        0.95: rem(15.2),
        25: rem(108),
      },
      spacing: {
        0.688: rem(11),
        30: rem(480),
        25: rem(102),
      },
      colors: {
        onyx: "#343739",
        beis: "#f9d3b4",
        beton: "#a1a1a1",
        obsidian: "#1f2123",
        lPurple: "#8167a9",
        PSea: "#1f1b2b",
        PBg: "#191622",
        Birus: "#1cebe5",
        Ash: "#CAC3B8",
        ww: "#8e7cc3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
