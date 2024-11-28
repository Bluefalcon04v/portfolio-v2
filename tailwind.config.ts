import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "editorialnew",
        head: "canopee",
        sub: "domaine",
      },
      fontSize:{
        xs: '0.85vw',
        sm: '1.2vw',
        base: '1.8vw',
        lg: '2.4vw',
      },
      colors:{
        black: '#1d1d1b',
        white: '#e0e0e0',
        background: '#cdc6be',
        red: '#FC1736',
      }
    },
  },
  plugins: [],
};
export default config;
