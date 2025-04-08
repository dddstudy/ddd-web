import React from "react";
import { cn } from "@/utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({
  className,
  children,
  ...restProps
}: Props) {
  return (
    <button
      className={cn(
        "rounded-[99px] p-16 min-h-56 min-w-56 bg-primary-normal shadow-strong",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
