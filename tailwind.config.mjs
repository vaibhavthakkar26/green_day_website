/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 
      backgroundImage: {

      },
      colors: {
        lightBlack: "var(--lightBlack)"
      },

      fontFamily: {
        Dosis: "Dosis , serif",
        OpenSans: "Open Sans, serif"
      },

      screens: {
        lsm: "350px",
        esm: "400px",
        em: "480px",
        ew: "510px",
        vem: "560px",
        sm: "640px",
        md: "768px",
        emd: "951px",
        lg: "1024px",
        xlg: "1150px",
        xl: "1280px",
        "1xl": "1440px",
        "2xl": "1530px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};
