"use client";
import { useState } from "react";
import ProjectList from "@/app/project/_components/ProjectList";
import TabList from "@/app/project/_components/TabList";
import projects from "@/app/project/data/project";

export default function Project() {
  const [selectedAppType, setSelectedAppType] = useState<
    "mobile" | "web" | "all"
  >("all");

  return (
    <div className="desktop:px-[24px] netbook:px-[24px] tablet:px-[24px] mobile:px-[24px] desktop:pb-[240px] netbook:pb-[240px] tablet:pb-[200px] mobile:pb-[180px] bg-[#EAEAEA]">
      <TabList
        all={{
          tab: {
            label: "All",
            value: projects.length,
            active: selectedAppType === "all",
          },
          onClick: () => setSelectedAppType("all"),
        }}
        mobile={{
          tab: {
            label: "Mobile",
            value: projects.filter(
              (project) =>
                project.typeofApp === "Android" || project.typeofApp === "iOS"
            ).length,
            active: selectedAppType === "mobile",
          },
          onClick: () => setSelectedAppType("mobile"),
        }}
        web={{
          tab: {
            label: "Web",
            value: projects.filter((project) => project.typeofApp === "web")
              .length,
            active: selectedAppType === "web",
          },
          onClick: () => setSelectedAppType("web"),
        }}
      />
      <div className="flex justify-center">
        <ProjectList
          projects={projects.filter((project) => {
            const filterMap = {
              all: () => true,
              mobile: () => ["Android", "iOS"].includes(project.typeofApp),
              web: () => project.typeofApp === "web",
            };
            return filterMap[selectedAppType]();
          })}
        />
      </div>
    </div>
  );
}
