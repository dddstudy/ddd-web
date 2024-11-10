import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({ children, ...restProps }: Props) {
  return (
    <button
      className={`rounded-[99px] p-16 min-h-56 min-w-56 bg-primary-normal shadow-strong`}
      {...restProps}
    >
      {children}
    </button>
  );
}
