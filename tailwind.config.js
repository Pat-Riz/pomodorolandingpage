const focusColor = "#487a99";
const focusDarkColor = "#39617a"; // lighter #406d89
const breakColor = "#e69a38";
const breakDarkColor = "#b87b2c"; // lighter #cf8a32
const primary = "#f2e6d8"; //f2e6d8 original
const primaryDark = "#d9cfc2"; //lighter #d9cfc2, darker #c1b8ac
const secondary = "#80363d";
//fdf2dc
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //https://lospec.com/palette-list/bitbybit
        focus: focusColor,
        "focus-dark": focusDarkColor,
        break: breakColor,
        primary,
        "primary-dark": primaryDark,
        secondary,
      },
      textColor: {
        focus: focusColor,
        "focus-dark": focusDarkColor,
        break: breakColor,
        "break-dark": breakDarkColor,
        primary: primary,
        "primary-dark": primaryDark,
        secondary: secondary,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
