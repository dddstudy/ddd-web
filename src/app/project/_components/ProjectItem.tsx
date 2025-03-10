import { Project } from "@/app/project/_types/project";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

interface ProjectItemProps extends ComponentPropsWithoutRef<"button"> {
  project: Project;
}

const TYPE_OF_APP_MAP: Record<Project["typeofApp"], string> = {
  iOS: "iOS APP",
  Android: "ANDROID APP",
  web: "WEB",
} as const;

export default function ProjectItem({ project, ...props }: ProjectItemProps) {
  const { typeofApp, index, isNew, semester, title, description, thumbnail } =
    project;

  return (
    <button {...props} className="flex flex-col gap-8 w-full">
      <div className="relative w-[100%] aspect-square">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={cn({
            [`rounded-tl-[20px] rounded-tr-[60px] rounded-bl-[20px] rounded-br-[60px] 
              tablet:rounded-tl-[20px] tablet:rounded-tr-[60px] tablet:rounded-bl-[20px] tablet:rounded-br-[60px]
              netbook:rounded-tl-[20px] netbook:rounded-tr-[56px] netbook:rounded-bl-[20px] netbook:rounded-br-[56px]
              desktop:rounded-tl-[24px] desktop:rounded-tr-[76px] desktop:rounded-bl-[24px] desktop:rounded-br-[76px]`]:
              index % 2 === 0,
            [`rounded-[20px] 
              tablet:rounded-[20px] 
              netbook:rounded-[20px] 
              desktop:rounded-[24px]`]: index % 2 === 1,
          })}
          placeholder="empty"
        />
        {isNew && (
          <div className="absolute top-[16px] left-[16px] bg-[#FD1008] text-white rounded-[99px] desktop:text-body-2-medium netbook:text-body-4-medium tablet:text-body-3-medium mobile:text-body-3-medium desktop:px-[18px] desktop:py-[7px] netbook:px-[12px] netbook:pt-[3px] netbook:pb-[5px] tablet:px-[14px] tablet:py-[5px] mobile:px-[14px] mobile:py-[5px] desktop:border-[1px] border-solid border-[rgba(255, 255, 255, 0.50)]">
            New
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 pt-[24px]">
        <div className="flex flex-col gap-6">
          <div className="text-text-secondary desktop:text-title-3-medium netbook:text-body-1-medium tablet:text-title-3-medium mobile:text-body-1-medium text-left truncate">
            {title}
          </div>
          <div className="text-text-secondary desktop:text-body-2-regular netbook:text-body-3-regular tablet:text-body-2-regular mobile:text-body-3-regular text-left line-clamp-2 whitespace-pre-line overflow-hidden">
            {description}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-text-primary text-body-2-medium mt-[16px] px-[10px] py-[3px] rounded-[99px] border-[1px] border-[#C6C6C6] border-solid">
            {semester}기
          </div>
          <div className="text-text-primary text-body-2-medium mt-[16px] px-[10px] py-[3px] rounded-[6px] border-[1px] border-[#C6C6C6] border-solid">
            {TYPE_OF_APP_MAP[typeofApp] || typeofApp}
          </div>
        </div>
      </div>
    </button>
  );
}
