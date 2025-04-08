import Tab, { TabProps } from "@/app/project/_components/Tab";

interface TabListProps {
  all: TabProps;
  mobile: TabProps;
  web: TabProps;
}

export default function TabList({ all, mobile, web }: TabListProps) {
  return (
    <div className="flex justify-center items-center desktop:gap-40 desktop:pt-[168px] desktop:pb-[72px] netbook:gap-40 netbook:pt-[136px] netbook:pb-64 tablet:pt-80 tablet:pb-52 tablet:gap-40 mobile:gap-16 mobile:pt-64 mobile:pb-40 mobile:flex-col mobile:items-start">
      <Tab {...all} />
      <Tab {...mobile} />
      <Tab {...web} />
    </div>
  );
}
