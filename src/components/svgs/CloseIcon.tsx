import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#closeIcon_svg__a)">
      <path
        fill="#202325"
        d="m12 10.587 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638z"
      />
    </g>
    <defs>
      <clipPath id="closeIcon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloseIcon;
