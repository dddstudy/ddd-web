"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopNavigation from "@/components/Navigation/DesktopNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import { screenMediaQuery } from "@/app/styles/screens";

export default function Navigation() {
  const isDesktop = useMediaQuery(screenMediaQuery.desktop);

  if (isDesktop) {
    return <DesktopNavigation />;
  }

  return <MobileNavigation />;
}
