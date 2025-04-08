"use client";

import { useEffect, useCallback } from "react";
import { useAtom, useSetAtom } from "jotai";

import { Portal } from "@/components/Portal";
import CloseIcon from "@/components/svgs/CloseIcon";
import SolidIconButton from "@/components/IconButton/Solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { screenMediaQuery } from "@/app/styles/screens";
import NotificationForm from "@/components/Notification/Form";
import SubmitFinish from "@/components/Notification/SubmitFinish";
import { registerStepAtom } from "@/store/notification/atom";
import ConfirmCancelPopup from "@/components/Notification/ConfirmCancelPopup";
import {
  resetNotificationFormAtom,
  setRegisterConfirmCancelIfChangedAtom,
} from "@/store/notification/action";

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
          <div className="w-full max-w-[848px] rounded-[28px] bg-white shadow-xl grid grid-rows-[max-content_auto]">
            {/* Close Button */}
            <div className="flex justify-end p-12 h-fit">
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
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default function NotificationRegisterPopup() {
  const [registerStep, setRegisterStep] = useAtom(registerStepAtom);

  const resetForm = useSetAtom(resetNotificationFormAtom);

  const setRegisterConfirmCancelIfChanged = useSetAtom(
    setRegisterConfirmCancelIfChangedAtom
  );

  const handleClose = () => {
    setRegisterConfirmCancelIfChanged();
  };

  const handleConfirmCancel = () => {
    setRegisterStep("beforeStart");
    resetForm();
  };

  const handleGoBackToForm = () => {
    setRegisterStep("form");
  };

  return (
    <>
      <Popup isOpen={registerStep !== "beforeStart"} onClose={handleClose}>
        {registerStep === "form" || registerStep === "closeConfirm" ? (
          <NotificationForm />
        ) : null}
        {registerStep === "submitSuccess" ? <SubmitFinish /> : null}
      </Popup>
      <ConfirmCancelPopup
        isOpen={registerStep === "closeConfirm"}
        onConfirmClose={handleConfirmCancel}
        onGoBackToForm={handleGoBackToForm}
      />
    </>
  );
}
