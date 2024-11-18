"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopNavigation from "@/components/Navigation/DesktopNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";

export default function Navigation() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <DesktopNavigation />;
  }

  return <MobileNavigation />;
}
