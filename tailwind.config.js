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
        primaryColor: "#173D33",
        accentColor: "#97D28B",
        secondaryColor: "#DCEFD8",
        errorColor: "#D28B8B",
        bgMenu: "#173d33",
        bgForm: "#EAEDF1",
      },
      fontSize: {
        titleH2: ["28px", { fontWeight: "400", lineHeight: "28px" }],
        description: [
          "16px",
          { lineHeight: "normal", letterSpacing: "-0.64px", fontWeight: "400" },
        ],
        question: [
          "18px",
          { lineHeight: "normal", letterSpacing: "-0.72px", fontWeight: "400" },
        ],
        subQuestion: [
          "14px",
          { lineHeight: "normal", letterSpacing: "-0.56px", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};
