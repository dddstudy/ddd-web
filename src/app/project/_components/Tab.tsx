import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

interface TabProps extends ComponentPropsWithoutRef<"button"> {
  tab: {
    label: string;
    value: number;
    active: boolean;
  };
}

export default function Tab({ tab, ...props }: TabProps) {
  const { label, value, active } = tab;
  return (
    <button
      {...props}
      className={cn(
        {
          "text-white": !active,
          "text-text-primary": active,
        },
        "flex items-start"
      )}
    >
      <div className="desktop:text-[78px] desktop:font-[600] desktop:leading-[94px] netbook:text-headline-3-semibold tablet:text-headline-5-bold mobile:text-headline-5-bold">
        {label}
      </div>
      <div className="desktop:text-title-3-bold netbook:text-body-1-bold tablet:text-body-3-bold mobile:text-body-3-bold">
        {value}
      </div>
    </button>
  );
}
