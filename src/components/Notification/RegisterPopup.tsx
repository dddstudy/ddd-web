"use client";

import { Popup } from "@/components/Notification/Popup";
import { useState } from "react";
import TextButton from "@/components/TextButton";
import RequiredInputLabel from "@/components/Notification/RequiredInputLabel";
import { useAtom } from "jotai";
import { isRegisterPopupOpenAtom } from "@/store/register/atom";

const POSITION_LIST = [
  "Product Manager",
  "Product Designer",
  "Android",
  "iOS",
  "Web Front",
  "Backend",
];

const SUPPORT_PATH_LIST = [
  "인스타그램",
  "링크드인",
  "미디엄",
  "오픈채팅",
  "지인 추천",
];

const getFormUrl = (position: string | null) => {
  if (position === "Product Manager") {
    return "https://forms.gle/GVQwuBeY3wzX95Gt5";
  }

  if (position === "Product Designer") {
    return "https://forms.gle/Z5Xh1TbjqogXQcbQ9";
  }

  if (position === "Android") {
    return "https://forms.gle/4UGokycbZrRYNFRR9";
  }

  if (position === "iOS") {
    return "https://forms.gle/uJwn681AXzkc1b779";
  }

  if (position === "Web Front") {
    return "https://forms.gle/MEaQkueQNWDqa2iB6";
  }

  if (position === "Backend") {
    return "https://forms.gle/QHsHovPNPsH5F6EPA";
  }

  return null;
};

export function RegisterForm() {
  const [enteredSupportPath, setEnteredSupportPath] = useState<string | null>(
    null
  );

  const [enteredPosition, setEnteredPosition] = useState<string | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formUrl = getFormUrl(enteredPosition);

    if (formUrl) {
      window.open(formUrl, "_blank");
    } else {
      alert("신청 가능한 포지션이 아닙니다.");
    }
  };

  return (
    <div className="w-full h-full netbook:px-48 desktop:px-64 px-28 netbook:pb-52 pb-32 overflow-auto">
      <div className="flex flex-col gap-12">
        <h2 className="text-[28px] netbook:text-[38px] desktop:text-[48px] text-[#1E1E1E] font-[700] line-height-[36px] netbook:line-height-[50px] desktop:line-height-[60px]">
          12기 지원하기
        </h2>
        <h3 className="text-[18px] tablet:text-title-2-medium text-text-secondary">
          열정과 재능이 넘치는 12기 멤버분들을 기다리고 있습니다.
          <br />
          개발자와 디자이너분들의 많은 신청 바랍니다!
        </h3>
      </div>
      <div className="desktop:pt-52 netbook:pt-48 pt-40 flex flex-col desktop:gap-[44px] netbook:gap-40 gap-32">
        <form
          className="flex flex-col desktop:justify-between netbook:justify-between tablet:gap-32 mobile:gap-32"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col desktop:gap-44 netbook:gap-40 tablet:gap-32 mobile:gap-32">
            <div className="flex flex-wrap gap-16">
              <RequiredInputLabel>
                관심 있는 포지션을 선택해 주세요.
              </RequiredInputLabel>
              <div className="flex flex-wrap gap-16">
                {POSITION_LIST.map((position) => (
                  <TextButton
                    key={position}
                    variant={position === enteredPosition ? "fill" : "outline"}
                    size="l"
                    type="button"
                    onClick={() => setEnteredPosition(position)}
                  >
                    {position}
                  </TextButton>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-16">
              <RequiredInputLabel>
                DDD를 알게 되신 경로가 궁금해요!
              </RequiredInputLabel>
              <div className="flex flex-wrap gap-16">
                {SUPPORT_PATH_LIST.map((supportPath) => (
                  <TextButton
                    key={supportPath}
                    variant={
                      supportPath === enteredSupportPath ? "fill" : "outline"
                    }
                    size="l"
                    type="button"
                    onClick={() => setEnteredSupportPath(supportPath)}
                  >
                    {supportPath}
                  </TextButton>
                ))}
              </div>
            </div>
          </div>
          <TextButton
            size="l"
            className="self-end w-full"
            disabled={!enteredSupportPath || !enteredPosition}
          >
            12기 신청하러 가기
          </TextButton>
        </form>
      </div>
    </div>
  );
}

export default function RegisterPopup() {
  const [isOpen, setIsOpen] = useAtom(isRegisterPopupOpenAtom);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup isOpen={isOpen} onClose={handleClose}>
      <RegisterForm />
    </Popup>
  );
}
