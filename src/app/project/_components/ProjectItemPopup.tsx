"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Portal } from "@/components/Portal";
import CloseIcon from "@/components/svgs/CloseIcon";
import SolidIconButton from "@/components/IconButton/Solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { screenMediaQuery } from "@/app/styles/screens";
import type { Project } from "@/app/project/_types/project";
import { Fullscreen } from "@/components/svgs";

interface ProjectItemPopupProps {
  project?: Project;
  onClose: () => void;
}

const getCircledLetter = (index: number): string => {
  // A의 유니코드 시작점: 🅐 (U+1F150)
  const circledACode = 0x1f150;
  return String.fromCodePoint(circledACode + index);
};

export default function ProjectItemPopup({
  project,
  onClose,
}: ProjectItemPopupProps) {
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
    if (project !== undefined) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleEscape, project]);

  if (!project) return null;

  const handleClickFullScreenButton = () => {
    window.open(project.popupPdf, "_blank");
  };

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-[0.8]"
          onClick={onClose}
        />

        {/* Popup Content */}
        <div className="flex justify-center relative z-10 w-full h-full p-[24px] tablet:px-[32px] tablet:py-[36px] netbook:px-[40px] netbook:py-[48px] desktop:px-[48px] desktop:py-[52px]">
          <div className="w-full max-w-[1200px] bg-white rounded-[28px] shadow-xl overflow-auto">
            {/* Close Button */}
            <div className="sticky top-0 flex justify-end p-12 bg-white z-10">
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

            {/* Project Content */}
            <div className="desktop:px-[88px] desktop:pb-[112px] netbook:px-[52px] netbook:pb-[80px] tablet:px-[40px] tablet:pb-[52px] mobile:px-[20px] mobile:pb-[24px]">
              <div className="flex flex-col desktop:gap-10 netbook:gap-10 tablet:gap-8 mobile:gap-8 desktop:mb-36 netbook:mb-28 tablet:mb-28 mobile:mb-24">
                <h2 className="text-text-primary desktop:text-headline-5-bold netbook:text-headline-6-bold tablet:text-headline-7-bold mobile:text-title-2-bold">
                  {project.title}
                </h2>
                <h3 className="text-text-primary desktop:text-title-2-medium netbook:text-title-3-medium tablet:text-body-1-medium mobile:text-body-2-medium">
                  {project.subTitle}
                </h3>
              </div>
              <div className="w-full relative">
                <Image
                  src={project.popupThumbnail}
                  alt={project.title}
                  width={1024}
                  height={576}
                  className="rounded-[12px] w-full"
                />
                <button
                  className="absolute top-[12px] right-[12px] desktop:p-12 netbook:p-10 tablet:p-10 mobile:p-8 rounded-[50%] bg-[rgb(12,14,15,0.48)] cursor-pointer"
                  onClick={handleClickFullScreenButton}
                >
                  <Fullscreen className="desktop:w-24 desktop:h-24 netbook:w-20 netbook:h-20 tablet:w-20 tablet:h-20 mobile:w-16 mobile:h-16" />
                </button>
              </div>
              <div className="desktop:pt-40 netbook:pt-32 tablet:pt-32 mobile:pt-32">
                <div className="flex flex-col desktop:gap-16 netbook:gap-12 tablet:gap-12 mobile:gap-12">
                  <h4 className="text-text-primary desktop:text-title-2-bold netbook:text-title-3-bold tablet:text-title-3-bold mobile:text-body-1-bold">
                    Service Description
                  </h4>
                  <p className="text-text-secondary whitespace-pre-wrap desktop:text-body-2-medium netbook:text-body-3-medium tablet:text-body-3-medium mobile:text-body-3-medium">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col desktop:gap-16 gap-12 desktop:pt-40 desktop:pb-60 netbook:pt-32 netbook:pb-48 tablet:pt-32 tablet:pb-48 mobile:pt-32 mobile:pb-36">
                  <h4 className="text-text-primary desktop:text-title-2-bold netbook:text-title-3-bold tablet:text-title-3-bold mobile:text-body-1-bold">
                    Key Features
                  </h4>
                  <ul className="flex flex-col gap-8">
                    {project.keyFeatures.map((feature, index) => (
                      <li
                        key={feature}
                        className="text-text-secondary text-body-3-medium desktop:text-body-2-medium"
                      >
                        <span className="desktop:text-body-2-bold text-body-3-bold">
                          {getCircledLetter(index)}&nbsp;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-[1px] bg-[#EAEAEA]" />

                <div className="flex mobile:flex-wrap desktop:gap-60 netbook:gap-52 tablet:gap-40 mobile:gap-24 desktop:pt-60 netbook:pt-48 tablet:pt-48 mobile:pt-36">
                  {project.team.map(({ position, memberNames }) => (
                    <div
                      key={position}
                      className="flex flex-col gap-8 min-w-[110px]"
                    >
                      <span className="text-text-secondary desktop:text-body-2-regular netbook:text-body-3-regular tablet:text-body-3-regular mobile:text-body-3-regular">
                        {position}
                      </span>
                      <span className="text-text-primary desktop:text-body-2-bold netbook:text-body-3-bold tablet:text-body-3-bold mobile:text-body-3-bold">
                        {memberNames.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
