"use client";
import { useState } from "react";
import HomeContainer from "@/app/_components/Home";
import RecruitContainer from "./_components/Recruit";

export default function Home() {
  const [homePageMode] = useState<"home" | "recruit">("recruit");
  return (
    <>{homePageMode === "home" ? <HomeContainer /> : <RecruitContainer />}</>
  );
}
