/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
        bigMobile: "480px",
      },
      colors: {
        accentColor: "#97D28B",
        secondaryColor: "#DCEFD8",
        bgMenu: "#173d33",
      },
      fontSize: {
        titleH2: ["28px", { fontWeight: "400", lineHeight: "28px" }],
        description: [
          "16px",
          { lineHeight: "normal", letterSpacing: "-0.64px", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};
