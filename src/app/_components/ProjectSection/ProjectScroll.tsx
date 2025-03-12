"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Project1 from "@/assets/imgs/project1.png";

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
    leftComment: "11th Project",
    rightComment: "Mozip App",
  },
  {
    image: Project1,
    alt: "project3",
    leftComment: "11th Project",
    rightComment: "Mozip App",
  },
  {
    image: Project1,
    alt: "project4",
    leftComment: "11th Project",
    rightComment: "Mozip App",
  },
];

function ProjectItem({
  src,
  alt,
  leftComment,
  rightComment,
}: ProjectItemProps) {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <Image
          src={src}
          alt={alt}
          className="desktop:w-[591px] desktop:h-[886px] netbook:w-[573px] netbook:h-[858px] tablet:w-[460px] tablet:h-[690px] mobile:w-[257px] mobile:h-[384px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="sticky flex mt-[30%] mb-[30%] top-[50%] bottom-[50%] justify-between desktop:text-headline-m netbook:text-headline-s tablet:text-title-1-bold mobile:text-body-1-bold">
          <p className="absolute -left-[10vw]">{leftComment}</p>
          <p className="absolute -right-[10vw]">{rightComment}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectScroll() {
  return (
    <section className="relative h-full w-full">
      <div className="flex flex-col justify-start items-center">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
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
