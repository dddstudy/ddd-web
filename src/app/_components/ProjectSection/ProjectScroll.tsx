"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Project1 from "@/assets/imgs/project1.png";
import { useCalculateCenterVisibility } from "@/hooks/useCalculateCenterVisibility";

interface ProjectItemProps {
  src: StaticImageData;
  alt: string;
  leftComment: string;
  rightComment: string;
}

interface ProjectData {
  image: StaticImageData;
  alt: string;
  leftComment: string;
  rightComment: string;
}

// 각 프로젝트별 데이터 설정
const projectsData: ProjectData[] = [
  {
    image: Project1,
    alt: "project1",
    leftComment: "11th Project",
    rightComment: "Mozip App",
  },
  {
    image: Project1,
    alt: "project2",
    leftComment: "12th Project",
    rightComment: "Mozip App",
  },
  {
    image: Project1,
    alt: "project3",
    leftComment: "13th Project",
    rightComment: "Mozip App",
  },
  {
    image: Project1,
    alt: "project4",
    leftComment: "14th Project",
    rightComment: "Mozip App",
  },
];

function ProjectItem({
  src,
  alt,
  leftComment,
  rightComment,
}: ProjectItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { centerVisibility } = useCalculateCenterVisibility(ref);

  // 코멘트 스타일 계산
  const commentStyle = {
    opacity: centerVisibility,
    transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
  };

  return (
    <div ref={ref} className="relative">
      <div className="flex justify-center">
        <Image
          src={src}
          alt={alt}
          className="desktop:w-[591px] desktop:h-[886px] netbook:w-[573px] netbook:h-[858px] tablet:w-[460px] tablet:h-[690px] mobile:w-[257px] mobile:h-[384px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="sticky flex my-[10%] top-[50%] bottom-[50%] justify-between desktop:text-headline-m netbook:text-headline-s tablet:text-title-1-bold mobile:text-body-1-bold">
          <p className="absolute -left-[5vw]" style={commentStyle}>
            {leftComment}
          </p>
          <p className="absolute -right-[5vw]" style={commentStyle}>
            {rightComment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectScroll() {
  return (
    <section className="relative h-full w-full">
      <div className="flex flex-col justify-start items-center">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.alt}
            src={project.image}
            alt={project.alt}
            leftComment={project.leftComment}
            rightComment={project.rightComment}
          />
        ))}
      </div>
    </section>
  );
}
