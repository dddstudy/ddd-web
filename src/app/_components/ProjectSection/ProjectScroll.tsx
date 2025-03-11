import Image, { StaticImageData } from "next/image";
import Project1 from "@/assets/imgs/project1.png";

interface ProjectItemProps {
  src: StaticImageData;
  alt: string;
}

function ProjectItem({ src, alt }: ProjectItemProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="desktop:w-[591px] desktop:h-[886px] netbook:w-[573px] netbook:[h-858px] tablet:w-[460px] tablet:h-[690px] mobile:w-[257px] mobile:h-[384px]"
    />
  );
}

export default function ProjectScroll() {
  return (
    <section className="relative h-full w-full">
      <div className="h-[300dvh] flex flex-col justify-start items-center">
        <ProjectItem src={Project1} alt="project1" />
        <ProjectItem src={Project1} alt="project1" />
        <ProjectItem src={Project1} alt="project1" />
        <ProjectItem src={Project1} alt="project1" />
      </div>
      <div className="absolute top-0 left-0 w-full h-[300dvh] pointer-events-none flex justify-center">
        <div className="sticky desktop:mt-[443px] desktop:top-[443px] netbook:mt-[429px] netbook:top-[429px] tablet:mt-[230px] tablet:top-[230px] mobile:mt-[128px] mobile:top-[128px] z-10 flex justify-between w-full desktop:w-[591px] netbook:w-[573px] tablet:w-[460px] mobile:w-[257px]">
          <p>leftComment</p>
          <p>rightComment</p>
        </div>
      </div>
    </section>
  );
}
