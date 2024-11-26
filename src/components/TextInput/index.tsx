import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { ErrorIcon } from "@/components/svgs";

const inputVariants = cva(
  "relative rounded-[99px] border-[1.5px] border-solid border-gray-30 focus:border-blue-40 disabled:border-gray-20 disabled:bg-gray-10 disabled:text-gray-30",
  {
    variants: {
      size: {
        s: "px-20 py-14 text-body-3-medium",
        l: "px-24 py-16 text-body-1-medium",
      },
      error: {
        true: "border-red-40",
        false: "",
      },
    },
    compoundVariants: [
      {
        error: true,
        size: "s",
        className: "pr-[44px]",
      },
      {
        error: true,
        size: "l",
        className: "pr-[48px]",
      },
    ],
  }
);

const errorIconVariants = cva(["absolute", "top-[50%]", "translate-y-[-50%]"], {
  variants: {
    size: {
      s: "right-20",
      l: "right-24",
    },
  },
});

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof errorIconVariants> {
  errorMessage?: string;
}

export default function TextInput({
  size = "s",
  error = false,
  errorMessage = "alert",
  className,
  disabled,
  ...restProps
}: Props) {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          className={cn(
            inputVariants({
              size,
              error,
              className,
            })
          )}
          disabled={disabled}
          {...restProps}
        />
        {error && (
          <ErrorIcon
            className={cn(
              errorIconVariants({
                size,
              })
            )}
          />
        )}
      </div>
      {error && (
        <p className="mt-4 text-red-40 text-body-3-regular">{errorMessage}</p>
      )}
    </>
  );
}
