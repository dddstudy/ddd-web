"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { AddIcon, SubtractIcon } from "@/components/svgs";

interface AccordionProps {
  label: string;
  title: string;
  description: React.ReactNode;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

export function Accordion({
  label,
  title,
  description,
  className,
  isActive,
  onClick,
}: AccordionProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[20px] bg-white",
        "p-24 desktop:px-64 desktop:py-40 tablet:px-40 tablet:py-32",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-body-4-medium mb-4 tablet:text-body-3-medium tablet:mb-8">
            {label}
          </p>
          <p className="text-body-3-bold tablet:text-title-3-bold desktop:text-title-2-bold">
            {title}
          </p>
        </div>
        <div className="pt-12 pl-20 tablet:pt-14">
          <button
            className="h-24 w-24 tablet:h-40 tablet:w-40"
            type="button"
            onClick={onClick}
          >
            {isActive ? <SubtractIcon /> : <AddIcon />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isActive
            ? "grid-rows-[1fr] opacity-100 mt-16"
            : "grid-rows-[0fr] opacity-0 mt-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-gray-70 text-body-3-regular tablet:mt-4 tablet:text-body-2-regular desktop:mt-8 desktop:text-body-1-regular">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionGroupProps {
  list: Array<{ label: string; title: string; description: React.ReactNode }>;
}

export function AccordionGroup({ list }: AccordionGroupProps) {
  const [activeItemKey, setActiveItemKey] = useState<string | null>(null);

  const handleItemClick = (key: string) => {
    setActiveItemKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col gap-16">
      {list.map((item) => (
        <Accordion
          key={item.title}
          label={item.label}
          title={item.title}
          description={item.description}
          isActive={activeItemKey === item.title}
          onClick={() => handleItemClick(item.title)}
        />
      ))}
    </div>
  );
}
