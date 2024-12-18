"use client";

import { useEffect } from "react";

import { Portal } from "@/components/Portal";
import TextButton from "@/components/TextButton";

interface PopupProps {
  isOpen: boolean;
  onConfirmClose: () => void;
  onGoBackToForm: () => void;
}

const ConfirmCancelPopup = ({
  isOpen,
  onConfirmClose,
  onGoBackToForm,
}: PopupProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.8]" />

        {/* Popup Content */}
        <div className="flex justify-center relative z-11 w-full h-full p-24 tablet:p-32 items-center">
          <div className="w-[460px] rounded-[32px] bg-white shadow-xl flex flex-col gap-32 px-28 pt-48 pb-24">
            <div className="flex flex-col gap-12 px-12">
              <div className="text-title-1-bold text-center text-text-primary">
                모집 알림을 신청하지 않고
                <br />
                닫으실 건가요?
              </div>
              <div className="text-body-1-regular text-text-secondary text-center">
                지금 닫으시면 작성된 내용은 모두 사라집니다.
                <br />
                그래도 닫으시겠습니까?
              </div>
            </div>
            <div className="flex-none">
              <TextButton
                variant="fill"
                size="l"
                type="button"
                onClick={onConfirmClose}
                className="w-full"
              >
                나가기
              </TextButton>
              <TextButton
                variant="text"
                size="l"
                type="button"
                onClick={onGoBackToForm}
                className="w-full"
              >
                취소
              </TextButton>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ConfirmCancelPopup;
