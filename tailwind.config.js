const rem = (val, base = 16) => `${val / base}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { dim: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527" },
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
      },
      spacing: {
        0.453: rem(7.25),
      },
      colors: {
        onyx: "#343739",
        beis: "#f9d3b4",
        beton: "#a1a1a1",
        obsidian: "#1f2123",
        lPurple: "#8167a9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
