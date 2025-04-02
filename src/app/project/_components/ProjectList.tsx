import { Project } from "@/app/project/_types/project";
import ProjectItem from "@/app/project/_components/ProjectItem";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 netbook:grid-cols-3 desktop:grid-cols-3 mobile:gap-y-[48px] tablet:gap-y-[88px] netbook:gap-y-[100px] desktop:gap-y-[100px] desktop:gap-x-[90px] netbook:gap-x-[72px] tablet:gap-x-[72px] mobile:gap-x-[0px]">
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
