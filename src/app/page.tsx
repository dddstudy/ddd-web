import AboutUsSection from "@/app/_components/AboutUsSection";
import CurrentlySection from "@/app/_components/CurrentlySection";
import WhatWeDoSection from "@/app/_components/WhatWeDoSection";

export default function Home() {
  return (
    <main>
      <CurrentlySection />
      <AboutUsSection />
      <WhatWeDoSection />
    </main>
  );
}
