import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const variants = cva("rounded-full flex justify-center items-center w-fit", {
  variants: {
    size: {
      s: "px-16 py-8 text-body-3-medium",
      m: "px-28 py-12 text-body-2-medium",
      l: "px-32 py-16 text-body-1-medium",
    },
    variant: {
      text: "text-text-primary disabled:text-text-inactive active:bg-gray-10",
      outline:
        "border-[1px] border-solid border-black disabled:border-gray-20 active:bg-button-enabled active:text-white active:border-button-enabled",
      fill: "text-white border-[1px] border-solid border-button-enabled bg-button-enabled disabled:bg-blue-20 disabled:border-blue-20",
    },
  },
});

interface Props
  extends VariantProps<typeof variants>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function TextButton({
  size = "s",
  variant = "fill",
  className,
  children,
  ...restProps
}: Props) {
  return (
    <button
      className={cn(
        variants({
          size,
          variant,
          className,
        })
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
