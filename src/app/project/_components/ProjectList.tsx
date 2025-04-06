"use client";

import { useState } from "react";
import { Project } from "@/app/project/_types/project";
import ProjectItem from "@/app/project/_components/ProjectItem";
import ProjectItemPopup from "@/app/project/_components/ProjectItemPopup";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(undefined);
  };

  return (
    <>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 netbook:grid-cols-3 desktop:grid-cols-3 mobile:gap-y-[48px] tablet:gap-y-[88px] netbook:gap-y-[100px] desktop:gap-y-[100px] desktop:gap-x-[90px] netbook:gap-x-[72px] tablet:gap-x-[72px] mobile:gap-x-[0px]  desktop:max-w-[1200px]">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>
      <ProjectItemPopup project={selectedProject} onClose={handleClosePopup} />
    </>
  );
}
