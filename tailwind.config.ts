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
      boxShadow: {
        strong:
          "0px 6px 12px 0px rgba(0, 0, 0, 0.12), 0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        tablet: "360px", // min-width
        netbook: "768px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
