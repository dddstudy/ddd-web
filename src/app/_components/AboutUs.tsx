import SectionContainer from "./SectionContainer";
import { ArrayElement } from "@/utils/types";

const jobList = [
  {
    title: "Project Manager",
    description:
      "프로젝트의 방향성을 설정하며, 크루원들의 협업을 이끌어요.\n서비스 런칭을 위해 모든 과정을 조율하는 크루의 중심이에요.",
  },
  {
    title: "Product Designer",
    description:
      "사용자의 니즈를 반영한 최상의 UI/UX를 만들어요.\n여러 툴을 활용해 협업하며, 더 나은 사용자 경험을 고민해요.",
  },
  {
    title: "Developer",
    description:
      "클린 코드를 기반으로 세상에 선보일 서비스를 구현해요.\n다른 개발자들과 협업하며 코드 리뷰와 피드백으로 실력을 향상시켜요.\n(Android/iOS/Web/Server)",
  },
];

function JobList() {
  return (
    <ul className="flex flex-col items-center gap-[100px] mobile:gap-[80px]">
      {jobList.map((item) => (
        <JobInfo {...item} key={item.title} />
      ))}
    </ul>
  );
}

function JobInfo({ title, description }: ArrayElement<typeof jobList>) {
  return (
    <li className="flex flex-col gap-20 text-center">
      <p className="netbook:text-headline-m tablet:text-headline-s font-bold">
        {title}
      </p>
      <p className="whitespace-pre mobile:whitespace-normal">{description}</p>
    </li>
  );
}

const descriptionList = [
  "DDD에 모이는 사람들은",
  "IT 업계에서 열정적으로 활동하면서",
  "실력을 쌓고 있는",
  "PM, 디자이너, 개발자예요.",
];

function AboutUsDescription() {
  return (
    <ul className="mt-64 mb-[320px] mobile:mb-[240px]">
      {descriptionList.map((item) => (
        <li
          key={item}
          className="desktop:text-headline-4xl netbook:text-headline-2xl tablet:text-headline-l text-headline-s"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AboutUs() {
  return (
    <SectionContainer className="w-full text-center py-[240px] bg-white bg-[url('/imgs/about-us.webp')] bg-no-repeat bg-[length:330px_415px] bg-[center_455px] mobile:bg-[length:245px_310px] mobile:bg-[center_315px]">
      <h2 className="text-text-primary text-title-s">About Us</h2>
      <AboutUsDescription />
      <JobList />
    </SectionContainer>
  );
}
