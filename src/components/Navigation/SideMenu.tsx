import Link from "next/link";
import snsList from "@/components/common/snsList";
import navigationList from "@/fixtures/navigationList.json";
import { CloseIcon } from "@/components/svgs";
import { Portal } from "../Portal";

interface Props {
  onClose: () => void;
}

export default function SideMenu({ onClose }: Props) {
  return (
    <Portal>
      <div className="px-24 fixed top-0 left-0 w-full h-[100dvh] bg-blue-40 text-white flex flex-col z-20">
        <header className="pt-24 flex justify-end">
          <button
            className="bg-white w-48 h-48 rounded-full flex justify-center items-center flex-shrink-0"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </header>
        <main className="flex flex-col justify-center flex-1">
          <div className="flex flex-col gap-6 tablet:gap-20">
            {navigationList.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-headline-5-bold font-medium tablet:text-headline-4-semibold tablet:font-medium"
                onClick={onClose}
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
    </Portal>
  );
}
