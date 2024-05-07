/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#050310",
        textColor: "#D1D1D1",
        pinkColor: "#FE0072",
        pinkColor2: "#E80ECD",
        footerColor: "#ffffff54",
        glassColor: "rgba(255, 255, 255, 0.2)",
        shadow: "rgba(132, 57, 249, 1)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        subtitles: "1.6rem",
        titles: "2rem",
        titlesMobile: "1.5rem",
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
