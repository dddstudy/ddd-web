"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Portal } from "@/components/Portal";
import CloseIcon from "@/components/svgs/CloseIcon";
import SolidIconButton from "@/components/IconButton/Solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { screenMediaQuery } from "@/app/styles/screens";
import type { Project } from "../_types/project";

interface ProjectItemPopupProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectItemPopup({
  project,
  isOpen,
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
        <div className="flex justify-center relative z-10 w-full h-full p-[24px] tablet:px-[48px] tablet:py-[52px] netbook:px-0 netbook:py-[88px] desktop:px-0 desktop:py-[200px]">
          <div className="w-full max-w-[848px] bg-white rounded-[28px] shadow-xl overflow-auto">
            {/* Close Button */}
            <div className="sticky top-0 flex justify-end p-12 bg-white">
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
            <div className="px-28 pb-48">
              <div className="flex flex-col gap-12">
                <h2 className="text-[28px] netbook:text-[38px] desktop:text-[48px] text-[#1E1E1E] font-[700] leading-[36px] netbook:leading-[50px] desktop:leading-[60px]">
                  {project.title}
                </h2>
                <h3 className="text-[18px] tablet:text-title-2-medium text-text-secondary">
                  {project.subTitle}
                </h3>
              </div>

              <div className="mt-48 flex flex-col gap-40">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={792}
                  height={446}
                  className="rounded-[16px]"
                />

                <div className="flex flex-col gap-24">
                  <h4 className="text-title-1-bold">Service Description</h4>
                  <p className="text-body-1-regular text-text-secondary whitespace-pre-wrap">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-24">
                  <h4 className="text-title-1-bold">Key Features</h4>
                  <ul className="flex flex-col gap-8">
                    {project.keyFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="text-body-1-regular text-text-secondary"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-24">
                  <h4 className="text-title-1-bold">Team</h4>
                  <div className="grid grid-cols-2 tablet:grid-cols-1 gap-16">
                    {project.team.map(({ position, memberNames }) => (
                      <div
                        key={position}
                        className="flex flex-col gap-8 text-body-1-regular"
                      >
                        <span className="text-text-secondary">{position}</span>
                        <span>{memberNames.join(", ")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
