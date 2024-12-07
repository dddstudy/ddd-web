"use client";

import { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import { AddIcon, SubtractIcon } from "@/components/svgs";

const accordionVariants = cva("w-full rounded-[20px] bg-white", {
  variants: {
    size: {
      desktop: "px-64 py-40",
      tablet: "px-40 py-32",
      mobile: "p-24",
    },
  },
});

const labelVariants = cva("", {
  variants: {
    size: {
      desktop: "text-body-3-medium mb-8",
      tablet: "text-body-3-medium mb-8",
      mobile: "text-body-4-medium mb-4",
    },
  },
});

const titleVariants = cva("", {
  variants: {
    size: {
      desktop: "text-title-2-bold",
      tablet: "text-title-3-bold",
      mobile: "text-body-3-bold",
    },
  },
});

const descriptionVariants = cva("text-gray-70", {
  variants: {
    size: {
      desktop: "mt-24 text-body-1-regular",
      tablet: "mt-20 text-body-2-regular",
      mobile: "mt-16 text-body-3-regular",
    },
  },
});

const touchAreaVariants = cva("", {
  variants: {
    size: {
      desktop: "pt-14 pl-20",
      tablet: "pt-14 pl-20",
      mobile: "pt-12 pl-20",
    },
  },
});

const iconButtonVariants = cva("", {
  variants: {
    size: {
      desktop: "h-40 w-40",
      tablet: "h-40 w-40",
      mobile: "h-24 w-24",
    },
  },
});

interface AccordionProps extends VariantProps<typeof accordionVariants> {
  label: string;
  title: string;
  description: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

export function Accordion({
  size = "desktop",
  label,
  title,
  description,
  className,
  isActive,
  onClick,
}: AccordionProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (isActive && contentEl) {
      setContentHeight(contentEl.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isActive]);

  return (
    <div className={cn(accordionVariants({ size }), className)}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className={cn(labelVariants({ size }))}>{label}</p>
          <p className={cn(titleVariants({ size }))}>{title}</p>
        </div>
        <div className={cn(touchAreaVariants({ size }))}>
          <button
            className={cn(iconButtonVariants({ size }))}
            type="button"
            onClick={onClick}
          >
            {isActive ? <SubtractIcon /> : <AddIcon />}
          </button>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ height: `${contentHeight}px` }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className={cn(descriptionVariants({ size }))}>{description}</div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  list: Array<{ label: string; title: string; description: React.ReactNode }>;
  size: AccordionProps["size"];
}

export function AccordionGroup({ list, size = "tablet" }: AccordionGroupProps) {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleItemClick = (key: number) => {
    setActiveItemIndex((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col gap-16">
      {list.map((item, index) => (
        <Accordion
          key={item.title}
          label={item.label}
          title={item.title}
          description={item.description}
          size={size}
          isActive={activeItemIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
