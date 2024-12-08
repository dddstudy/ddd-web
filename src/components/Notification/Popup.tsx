"use client";

import { useEffect, useCallback } from "react";

import { Portal } from "@/components/Portal";
import CloseIcon from "@/components/svgs/CloseIcon";
import SolidIconButton from "@/components/IconButton/Solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { screenMediaQuery } from "@/app/styles/screens";
import NotificationForm from "@/components/Notification/Form";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  const isTablet = useMediaQuery(screenMediaQuery.tablet);

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
        <div className="flex justify-center desktop:justify-end relative z-10 w-full h-full p-24 tablet:p-32">
          <div className="w-full max-w-[848px] rounded-[28px] bg-white shadow-xl grid grid-rows-[1fr auto]">
            {/* Close Button */}
            <div className="flex justify-end p-12">
              <div className="p-20">
                <SolidIconButton
                  onClick={onClose}
                  size={isTablet ? "s" : "m"}
                  className="bg-gray-20"
                >
                  <CloseIcon />
                </SolidIconButton>
              </div>
            </div>
            <div className="w-full h-full netbook:px-48 desktop:px-64 px-28 netbook:pb-52 pb-32 overflow-auto">
              {/* Header */}
              <div className="flex flex-col gap-12">
                <h2 className="text-[28px] netbook:text-[38px] desktop:text-[48px] text-[#1E1E1E] font-[700] line-height-[36px] netbook:line-height-[50px] desktop:line-height-[60px]">
                  12기 모집 알림 신청
                </h2>
                <h3 className="text-[18px] tablet:text-title-2-medium text-text-secondary">
                  DDD 12기 크루 모집이 시작되면, 가장 먼저 이메일로
                  안내드릴게요!
                </h3>
              </div>
              {/* Content */}
              <div className="desktop:pt-52 netbook:pt-48 pt-40 flex flex-col desktop:gap-[44px] netbook:gap-40 gap-32">
                {children}
              </div>
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
      <NotificationForm />
    </Popup>
  );
}
