import type { Config } from "tailwindcss";
import fontSize from "./src/app/styles/typography";
import spacing from "./src/app/styles/spacing";
import colors from "./src/app/styles/color";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
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
