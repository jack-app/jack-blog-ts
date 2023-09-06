import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      spacing: {
        10: "2px",
        20: "4px",
        30: "8px",
        40: "12px",
        50: "16px",
        60: "24px",
        70: "32px",
        80: "40px",
        90: "48px",
        100: "56px",
        110: "64px",
        120: "80px",
        130: "96px",
        140: "112px",
        150: "128px",
      },
    },
  },
  plugins: [],
};
export default config;
