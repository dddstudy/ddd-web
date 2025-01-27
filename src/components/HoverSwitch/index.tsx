"use client";

import { useState } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

export default function HoverSwitch({ text, onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-[99px] py-[14px] mobile:py-[7px] text-white cursor-pointer ${
        isHovered
          ? "bg-[rgb(11,193,72)]/[.88] pl-16 pr-8 mobile:pl-12 mobile:pr-4"
          : "bg-[rgb(253,16,8)]/[.88] pl-8 pr-16 mobile:pl-4 mobile:pr-12"
      }`}
    >
      <span
        className={`absolute inline-block rounded-full bg-white w-44 h-44 mobile:w-32 mobile:h-32 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
          isHovered
            ? "left-[calc(100%-8px)] mobile:left-[calc(100%-4px)] -translate-x-full"
            : "left-8 mobile:left-4"
        }`}
      ></span>
      <span
        className={`ml-52 mobile:ml-44 text-title-2-bold mobile:text-body-1-bold font-bold transition-all duration-500 ease-in-out ${
          isHovered && "ml-[0px] mr-52 mobile:ml-[0px] mobile:mr-44"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
