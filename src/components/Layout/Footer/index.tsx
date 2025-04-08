import Link from "next/link";
import snsList from "@/components/common/snsList";
import ApplyButtonWrapper from "./ApplyButtonWrapper";

function LinkList({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex flex-col gap-8 tablet:items-center mobile:items-center">
      <p className="text-body-3-medium">{label}</p>
      {children}
    </li>
  );
}

function HeaderTitle({ title }: { title: string }) {
  return (
    <h2 className="desktop:text-[130px] netbook:text-[136px] tablet:text-[106px] text-[56px] italic font-semibold leading-[100%]">
      {title}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-blue-50 text-white py-80 tablet:py-64 mobile:py-52 flex flex-col justify-between items-center overflow-hidden">
      <section className="desktop:mb-[289px] netbook:mb-[200px] tablet:mb-[120px] mb-[88px]">
        <ul className="flex gap-80 netbook:flex-row tablet:flex-col tablet:items-center mobile:flex-col mobile:items-center mobile:gap-40">
          <LinkList label="Email">
            <Link
              className="text-title-1-bold mobile:text-title-2-bold"
              href="mailto:dddstudy1@gmail.com"
            >
              dddstudy1@gmail.com
            </Link>
          </LinkList>
          <LinkList label="Follow Us">
            <ul className="flex flex-wrap items-center mobile:flex-col mobile:gap-16">
              {snsList.map((item, index) => (
                <div className="flex items-center" key={item.name}>
                  <Link
                    className="flex items-center gap-4 text-title-1-bold mobile:text-title-2-bold"
                    href={item.link}
                    target="_blank"
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                  {index < snsList.length - 1 && (
                    <span className="mx-16 w-[1px] h-[14px] bg-blue-20 mobile:hidden" />
                  )}
                </div>
              ))}
            </ul>
          </LinkList>
        </ul>
      </section>
      <section className="max-w-[1200px] text-center px-0 tablet:px-20 mobile:px-20">
        <HeaderTitle title="Dynamic" />
        <div className="flex flex-col desktop:gap-24 desktop:flex-row ">
          <HeaderTitle title="Developer" />
          <HeaderTitle title="Designer" />
        </div>
        <p className="mt-24 text-body-3-regular">
          ©2024 Dynamic Developer Designer,{" "}
          <br className="hidden mobile:block" /> All Rights Reserved.
        </p>
      </section>
      <ApplyButtonWrapper className="absolute desktop:top-[430px] netbook:top-[340px] tablet:top-[390px] mobile:top-[385px]" />
    </footer>
  );
}
