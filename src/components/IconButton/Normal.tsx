import { cn } from "@/utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showBadge?: boolean;
}

export default function NormalIconButton({
  children,
  showBadge = false,
  className,
  ...restProps
}: Props) {
  return (
    <button
      className={cn(
        "relative rounded-[99px] p-8 min-h-40 min-w-40 hover:bg-label-normal hover:bg-opacity-[.0375] focus:bg-label-normal focus:bg-opacity-[.06] active:bg-label-normal active:bg-opacity-[.09] disabled:bg-transparent",
        showBadge &&
          'after:content-[""] after:absolute after:top-8 after:right-8 after:w-4 after:h-4 after:rounded-[99px] after:bg-primary-normal',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
