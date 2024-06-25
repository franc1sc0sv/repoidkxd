/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary_light_red_work:
          "hsl(var(--primary-light-red-work) / <alpha-value>)",
        primary_soft_blue: "hsl(var(--primary-soft-blue) / <alpha-value>)",
        primary_light_red_study:
          "hsl(var(--primary-light-red-study) / <alpha-value>)",
        primary_lime_green: "hsl(var(--primary-lime-green) / <alpha-value>)",
        primary_violet: "hsl(var(--primary-violet) / <alpha-value>)",
        primary_soft_orange: "hsl(var(--primary-soft-orange) / <alpha-value>)",
        prymary_blue: "hsl(var(--prymary-blue) / <alpha-value>)",

        neutral_very_dark_blue:
          "hsl(var(--neutral-very-dark-blue) / <alpha-value>)",
        neutral_dark_blue: "hsl(var(--neutral-dark-blue) / <alpha-value>)",
        neutral_desaturated_blue:
          "hsl(var(--neutral-desaturated-blue) / <alpha-value>)",
        neutral_pale_blue: "hsl(var(--neutral-pale-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
