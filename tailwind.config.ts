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
  },
  plugins: [],
};
export default config;
