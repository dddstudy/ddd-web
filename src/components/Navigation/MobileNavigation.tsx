import Link from "next/link";
import { useState } from "react";
import {
  DddIcon,
  MenuIcon,
  CloseIcon,
  InstagramIcon,
  LinkedInIcon,
  GithubIcon,
} from "@/components/svgs";
import navigationList from "@/fixtures/navigationList.json";

const snsList = [
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/dynamic_ddd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/dddcommunity",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/DDD-Community",
  },
];

export default function MobileNavigation() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const mobileNavigationList = navigationList.filter(
    (item) => item.href !== "/recruit-notification"
  );

  function openMenu() {
    setMenuOpened(true);
  }

  function closeMenu() {
    setMenuOpened(false);
  }

  return (
    <div className="flex justify-between px-24 pt-24 w-full">
      <div className="bg-black w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0">
        <DddIcon />
      </div>
      <button
        className="bg-white w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0"
        onClick={openMenu}
      >
        <MenuIcon />
      </button>
      {isMenuOpened && (
        <div className="px-24 fixed top-0 left-0 w-full h-[100vh] bg-blue-40 text-white flex flex-col">
          <header className="pt-24 flex justify-end">
            <button
              className="bg-white w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </header>
          <main className="flex flex-col justify-center flex-1">
            <div className="flex flex-col gap-6 tablet:gap-20">
              {mobileNavigationList.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-headline-5-bold font-medium tablet:text-headline-4-semibold tablet:font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </main>
          <footer className="py-32">
            <ul className="flex flex-col gap-24">
              <li className="flex flex-col gap-4">
                <p className="text-body-3-medium text-blue-20">Email</p>
                <Link
                  className="text-title-3-regular"
                  href="mailto:dddstudy1@gmail.com"
                >
                  dddstudy1@gmail.com
                </Link>
              </li>
              <li className="flex flex-col gap-4">
                <p className="text-body-3-medium text-blue-20">Follow Us</p>
                <ul className="flex gap-8 flex-wrap">
                  {snsList.map((item) => (
                    <Link
                      className="flex gap-4 text-title-3-regular"
                      href={item.link}
                      key={item.name}
                      target="_blank"
                    >
                      {item.icon}
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </ul>
              </li>
            </ul>
          </footer>
        </div>
      )}
    </div>
  );
}
