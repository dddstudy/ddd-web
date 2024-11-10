interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "s" | "m" | "l" | "xl";
}

const sizeClassName = {
  s: "p-6 min-h-28 min-w-28",
  m: "p-8 min-h-36 min-w-36",
  l: "p-12 min-h-48 min-w-48",
  xl: "p-16 min-h-64 min-w-64",
};

export default function SolidIconButton({
  size,
  children,
  ...restProps
}: Props) {
  return (
    <button
      className={`rounded-[99px] flex justify-center items-center bg-primary-normal text-white disabled:bg-[rgb(12,14,15)]/[.12] ${sizeClassName[size]}`}
      {...restProps}
    >
      {children}
    </button>
  );
}
