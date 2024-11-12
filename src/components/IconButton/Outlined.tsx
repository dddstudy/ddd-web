import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const variants = cva(
  "rounded-[99px] border-[1px] border-solid border-line-normal hover:bg-label-normal hover:bg-opacity-[.0375] focus:bg-label-normal focus:bg-opacity-[.06] active:bg-label-normal active:bg-opacity-[.09] disabled:bg-transparent disabled:text-label-disabled",
  {
    variants: {
      size: {
        normal: "p-8 min-h-40 min-w-40",
        small: "p-[5px] min-h-32 min-w-32",
        custom: "p-4 min-h-28 min-w-28",
      },
    },
  }
);

interface Props
  extends VariantProps<typeof variants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function OutlinedIconButton({
  size = "custom",
  className,
  children,
  ...restProps
}: Props) {
  return (
    <button className={cn(variants({ size, className }))} {...restProps}>
      {children}
    </button>
  );
}
