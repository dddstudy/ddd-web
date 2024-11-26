import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#202325" d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z" />
  </svg>
);
export default SvgMenuIcon;
