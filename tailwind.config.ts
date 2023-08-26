import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-100": "#FFFCF2",
      "primary-500": "#FFC121",
      "primary-900": "#FF5E2C",
      white: "#FFFFFF",
      black: "#484335",
    },
    fontFamily: {
      body: ["Avenir", "hiragino kaku gothic pro", "sans-serif"],
    },
    fontSize: {
      h1: ["24px", "32px"],
      h2: ["20px", "28px"],
      h3: ["18px", "26px"],
      body: ["16px", "22px"],
      detail1: ["14px", "18px"],
      detail2: ["12px", "16px"],
    },
  },
  plugins: [],
};
export default config;
