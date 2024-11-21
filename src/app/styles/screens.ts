import { CustomThemeConfig } from "tailwindcss/types/config";

const TABLET = 375;
const NETBOOK = 768;
const DESKTOP = 1024;

const screens: CustomThemeConfig["screens"] = {
  tablet: `${TABLET}px`, // min-width
  netbook: `${NETBOOK}px`,
  desktop: `${DESKTOP}px`,
};

const screenMediaQuery = {
  tablet: `(max-width: ${TABLET - 1}px)`,
  netbook: `(min-width: ${TABLET}px) and (max-width: ${NETBOOK - 1}px)`,
  desktop: `(min-width: ${NETBOOK}px)`,
};

export {
  screens,
  screenMediaQuery,
};
