"use client";

import { useEffect, useCallback } from "react";

import { Portal } from "@/components/Portal";
import CloseIcon from "@/components/svgs/CloseIcon";
import SolidIconButton from "@/components/IconButton/Solid";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-[0.8]"
          onClick={onClose}
        />

        {/* Popup Content */}
        <div className="flex justify-end relative z-10 w-full h-full pt-32 pr-32 pb-32 pl-0">
          <div className="w-full max-w-[848px] rounded-[28px] bg-white shadow-xl">
            {/* Close Button */}
            <div className="flex justify-end p-12">
              <div className="p-20">
                <SolidIconButton
                  onClick={onClose}
                  size="l"
                  className="bg-gray-20"
                >
                  <CloseIcon />
                </SolidIconButton>
              </div>
            </div>
            <div className="w-full h-full px-64 pb-52">
              {/* Header */}
              <div className="flex flex-col gap-12">
                <h2 className="text-[48px] text-[#1E1E1E] font-[700] line-height-[60px]">
                  12기 모집 알림 신청
                </h2>
                <h3 className="text-title-2-medium text-text-secondary">
                  DDD 12기 크루 모집이 시작되면, 가장 먼저 이메일로
                  안내드릴게요!
                </h3>
              </div>
              {/* Content */}
              <div className="pt-52 flex flex-col gap-[44px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default function NotificationRegisterPopup({
  isOpen,
  onClose,
}: PopupProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div>알림 등록</div>
    </Popup>
  );
}
