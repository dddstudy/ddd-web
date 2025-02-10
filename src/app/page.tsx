import CurrentlySection from "@/app/_components/CurrentlySection";
import AboutUsSection from "@/app/_components/AboutUsSection";
import WhatWeDoSection from "@/app/_components/WhatWeDoSection";
import ProjectSection from "@/app/_components/ProjectSection";

export default function Home() {
  return (
    <main>
      <CurrentlySection />
      <AboutUsSection />
      <WhatWeDoSection />
      <ProjectSection />
    </main>
  );
}
