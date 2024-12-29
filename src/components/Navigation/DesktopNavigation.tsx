import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSetAtom } from "jotai";

import TextButton from "@/components/TextButton";
import { DddIcon } from "@/components/svgs";
import navigationList from "@/fixtures/navigationList.json";
import { registerStepAtom } from "@/store/notification/atom";

export default function DesktopNavigation() {
  const pathname = usePathname();

  const setRegisterStep = useSetAtom(registerStepAtom);

  const handleClickOpen = () => {
    setRegisterStep("form");
  };

  return (
    <div className="flex w-full justify-center pt-32">
      <div className="bg-black w-[55px] h-[55px] rounded-full flex justify-center items-center flex-shrink-0">
        <DddIcon />
      </div>
      <nav className="bg-white bg-opacity-[.84] p-4 rounded-full flex gap-[2px] backdrop-blur-[2.5px]">
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
          모집 알림 신청
        </TextButton>
      </nav>
    </div>
  );
}
