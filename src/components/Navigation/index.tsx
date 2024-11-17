"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return <>{isDesktop ? <DesktopNavigation /> : <MobileNavigation />}</>;
}
