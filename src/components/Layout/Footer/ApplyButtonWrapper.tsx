"use client";

import { useSetAtom } from "jotai";
import { registerStepAtom } from "@/store/notification/atom";
import HoverSwitch from "@/components/HoverSwitch";

interface Props {
  className: string;
}

export default function ApplyButtonWrapper({ className }: Props) {
  const setRegisterStep = useSetAtom(registerStepAtom);

  const handleClick = () => {
    setRegisterStep("form");
  };

  return (
    <div className={className}>
      <HoverSwitch text="다음 기수 신청" onClick={handleClick} />
    </div>
  );
}
