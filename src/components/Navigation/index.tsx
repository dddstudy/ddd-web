"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TextButton from "@/components/TextButton";
import SvgDddIcon from "@/components/svgs/DddIcon";

export default function Navigation() {
  const pathname = usePathname();

  const navigationList = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Manager",
      href: "/manager",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "모집 알림 신청",
      href: "/recruit-notification",
    },
  ];

  return (
    <div className="flex">
      <div className="bg-black w-[55px] h-[55px] rounded-full flex justify-center items-center">
        <SvgDddIcon />
      </div>
      <nav className="bg-white p-4 rounded-full flex gap-[2px]">
        {navigationList.map((item) => (
          <Link href={item.href} key={item.name}>
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
