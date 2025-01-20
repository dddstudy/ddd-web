import { useEffect, useState } from "react";
import { DddIcon, MenuIcon } from "@/components/svgs";
import SideMenu from "./SideMenu";

export default function MobileNavigation() {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function openMenu() {
    setMenuOpened(true);
  }

  function closeMenu() {
    setMenuOpened(false);
  }

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpened]);

  return (
    <div className="flex justify-between px-20 pt-20 w-full">
      <div className="bg-black w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0">
        <DddIcon />
      </div>
      <button
        className="bg-white w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>
      {isMenuOpened && <SideMenu onClose={closeMenu} />}
    </div>
  );
}
