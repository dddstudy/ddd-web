"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSetAtom } from "jotai";

import TextButton from "@/components/TextButton";
import { DddIcon } from "@/components/svgs";
import navigationList from "@/fixtures/navigationList.json";
import { isRegisterPopupOpenAtom } from "@/store/register/atom";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const setIsRegisterPopupOpen = useSetAtom(isRegisterPopupOpenAtom);

  const handleClickOpen = () => {
    setIsRegisterPopupOpen(true);
  };

  return (
    <div className="desktop:block hidden">
      <div className="flex w-full justify-center pt-32">
        <Link
          href="/"
          className="bg-black w-[55px] h-[55px] rounded-full flex justify-center items-center flex-shrink-0"
        >
          <DddIcon />
        </Link>
        <nav className="bg-white bg-opacity-[.84] p-4 rounded-full flex gap-[2px] after:backdrop-blur-[2.5px]">
          {navigationList.map((item) => (
            <Link className="flex-shrink-0" href={item.href} key={item.name}>
              <TextButton
                size="m"
                variant={pathname === item.href ? "fill" : "text"}
              >
                {item.name}
              </TextButton>
            </Link>
          ))}
          <TextButton
            size="m"
            variant="fill"
            type="button"
            onClick={handleClickOpen}
          >
            12기 지원하기
          </TextButton>
        </nav>
      </div>
    </div>
  );
}
