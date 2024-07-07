import { text } from "stream/consumers";
import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgba(var(--main))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        background: "rgba(var(--background))",
        text: "rgba(var(--text))",
      },
    },
  },
  plugins: [],
};
export default config;
