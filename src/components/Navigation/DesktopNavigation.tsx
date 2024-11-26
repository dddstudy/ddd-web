import Link from "next/link";
import { usePathname } from "next/navigation";
import TextButton from "@/components/TextButton";
import { DddIcon } from "@/components/svgs";
import navigationList from "@/fixtures/navigationList.json";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center pt-32">
      <div className="bg-black w-[55px] h-[55px] rounded-full flex justify-center items-center flex-shrink-0">
        <DddIcon />
      </div>
      <nav className="bg-white p-4 rounded-full flex gap-[2px]">
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
      </nav>
    </div>
  );
}
