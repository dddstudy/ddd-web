import type { Config } from "tailwindcss";
import fontSize from "./src/app/styles/typography";
import spacing from "./src/app/styles/spacing";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize,
      spacing,
    },
  },
  plugins: [],
};
export default config;
