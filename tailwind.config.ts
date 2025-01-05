import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import fontSize from "./src/app/styles/typography";
import spacing from "./src/app/styles/spacing";
import colors from "./src/app/styles/color";
import { screens } from "./src/app/styles/screens";

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
      screens,
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
      matchUtilities({
        "transform-style": (value) => ({
          "transform-style": value,
        }),
      });
    }),
  ],
};
export default config;
