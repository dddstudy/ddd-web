import { useState, useRef, useEffect } from "react";
import AddIcon from "@/components/svgs/AddIcon";
import SubtractIcon from "@/components/svgs/SubtractIcon";

interface Props {
  size: "desktop" | "tablet" | "mobile";
  label: string;
  title: string;
  description: React.ReactNode;
}

const sizeClassNames = {
  desktop: {
    accordion: "px-64 py-40",
    contentArea: "",
    label: "text-body-3-medium mb-8",
    title: "text-title-2-bold",
    description: "mt-24 text-body-1-regular",
    touchArea: "pt-14 pl-20",
    touchIcon: "h-40 w-40",
  },
  tablet: {
    accordion: "px-40 py-32",
    contentArea: "",
    label: "text-body-3-medium mb-8",
    title: "text-title-3-bold",
    description: "mt-20 text-body-2-regular",
    touchArea: "pt-14 pl-20",
    touchIcon: "h-40 w-40",
  },
  mobile: {
    accordion: "p-24",
    contentArea: "",
    label: "text-body-4-medium mb-4",
    title: "text-body-3-bold",
    description: "mt-16 text-body-3-regular",
    touchArea: "pt-12 pl-20",
    touchIcon: "h-24 w-24",
  },
};

export default function Accordion({ size, label, title, description }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (isOpened && contentEl) {
      setContentHeight(contentEl.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpened]);

  function toggleAccordion() {
    setIsOpened(!isOpened);
  }

  return (
    <div
      className={`${sizeClassNames[size].accordion} ${
        isOpened ? "bg-blue-10" : "bg-white"
      } rounded-[20px] w-full flex justify-between`}
    >
      <div className={`${sizeClassNames[size].contentArea}`}>
        <p className={`${sizeClassNames[size].label}`}>{label}</p>
        <p className={`${sizeClassNames[size].title}`}>{title}</p>
        <div
          ref={contentRef}
          style={{ height: `${contentHeight}px` }}
          className={`overflow-hidden transition-[height] duration-300 ease-in-out`}
        >
          <div className={`${sizeClassNames[size].description} text-gray-70`}>
            {description}
          </div>
        </div>
      </div>
      <div className={`${sizeClassNames[size].touchArea}`}>
        <button
          className={`${sizeClassNames[size].touchIcon}`}
          type="button"
          onClick={toggleAccordion}
        >
          {isOpened ? <SubtractIcon /> : <AddIcon />}
        </button>
      </div>
    </div>
  );
}
