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
      },
      padding: {
        1.063: rem(17),
        0.125: rem(2),
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
