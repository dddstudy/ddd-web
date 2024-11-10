interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "normal" | "small" | "custom";
}

const sizeClassNames = {
  normal: "p-8 min-h-40 min-w-40",
  small: "p-[5px] min-h-32 min-w-32",
  custom: "p-4 min-h-28 min-w-28",
};

export default function OutlinedIconButton({
  size = "custom",
  children,
  ...restProps
}: Props) {
  return (
    <button
      className={`rounded-[99px] border-[1px] border-solid border-line-normal hover:bg-label-normal hover:bg-opacity-[.0375] focus:bg-label-normal focus:bg-opacity-[.06] active:bg-label-normal active:bg-opacity-[.09] disabled:bg-transparent disabled:text-label-disabled ${sizeClassNames[size]}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
