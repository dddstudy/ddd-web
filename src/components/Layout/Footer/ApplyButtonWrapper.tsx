"use client";

import HoverSwitch from "@/components/HoverSwitch";

interface Props {
  className: string;
}

export default function ApplyButtonWrapper({ className }: Props) {
  const handleClick = () => {
    console.log("신청");
  };

  return (
    <div className={className}>
      <HoverSwitch text="다음 기수 신청" onClick={handleClick} />
    </div>
  );
}
