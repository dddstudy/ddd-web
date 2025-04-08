import CurrentlySection from "@/app/_components/Home/CurrentlySection";
import AboutUsSection from "@/app/_components/Home/AboutUsSection";
import WhatWeDoSection from "@/app/_components/Home/WhatWeDoSection";
import ProjectSection from "@/app/_components/Home/ProjectSection";
import CrewMembersSection from "@/app/_components/Home/CrewMembersSection";

export default function HomeContainer() {
  return (
    <>
      <CurrentlySection />
      <AboutUsSection />
      <WhatWeDoSection />
      <ProjectSection />
      <CrewMembersSection />
    </>
  );
}
