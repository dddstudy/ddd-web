import AboutUs from "@/app/_components/AboutUs";
import CurrentlySection from "@/app/_components/CurrentlySection";
import WhatWeDoSection from "@/app/_components/WhatWeDoSection";

export default function Home() {
  return (
    <main>
      <CurrentlySection />
      <AboutUs />
      <WhatWeDoSection />
    </main>
  );
}
