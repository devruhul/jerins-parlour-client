/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./src/**/*.{html,js}",
  ],
  // These options are passed through directly to PurgeCSS

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
      colors: {
        "light-tomato": "#FFF8F5",
        "footer-bg": "#F63E7B",
        "span-text": "#F63E7B",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
