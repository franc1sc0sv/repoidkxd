/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary_oft_orange: "hsl(35, 77%, 62%)",
        primary_oft_red: "hsl(5, 85%, 63%)",
        neutral_off_white: "hsl(36, 100%, 99%)",
        neutral_grayish_blue: "hsl(233, 8%, 79%)",
        neutral_dark_grayish_blue: "hsl(236, 13%, 42%)",
        neutral_very_dark_blue: "hsl(240, 100%, 5%) ",
      },
      backgroundImage: {
        bg_desktop: "url(../assets/images/image-web-3-desktop.jpg)",
        bg_mobil: "url(../assets/images/image-web-3-mobile.jpg)",
      },
    },
  },
  plugins: [],
};
