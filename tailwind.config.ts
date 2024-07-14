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
        highlightFont: ["Fraunces"],
        headfont: "Cantarell",
        cursiveFont: "Italianno",
      },
      // fontWeight: {
      //   100: "100",
      //   200: "200",
      //   300: "300",
      //   400: "400",
      //   500: "500",
      //   600: "600",
      //   700: "700",
      //   800: "800",
      //   900: "900",
      // },
      // keyframes: {
      //   "font-variation-settings": {
      //     "0%": { "font-variation-settings": '"SOFT" 0, "WONK" 0' },
      //     "100%": { "font-variation-settings": '"SOFT" 1, "WONK" 1' },
      //   },
      // },
      // animation: {
      //   "font-variation-settings": "font-variation-settings 0.5s ease-in-out",
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
