"use client";
import React, { useEffect, useState } from "react";
import TextButton from "@/components/TextButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import faqList from "@/app/faq/faqList";
import Accordion from "@/components/Accordion";
import { screenMediaQuery } from "@/app/styles/screens";

type QuestionType = "recruitment" | "operation" | "activities";
type AccordionSize = React.ComponentProps<typeof Accordion>["size"];

const questionTypeList: { type: QuestionType; name: string }[] = [
  {
    type: "recruitment",
    name: "모집 및 지원",
  },
  {
    type: "operation",
    name: "운영 방식",
  },
  {
    type: "activities",
    name: "활동 내용",
  },
];

export default function FAQ() {
  const [questionType, setQuestionType] = useState<QuestionType>("recruitment");
  const isMobile = useMediaQuery(screenMediaQuery.tablet);
  const isTablet = useMediaQuery(screenMediaQuery.netbook);
  const isDesktop = useMediaQuery(screenMediaQuery.desktop);

  function getDeviceType(): AccordionSize {
    if (isMobile) return "mobile";
    if (isTablet) return "tablet";
    return "desktop";
  }

  const [accordionSize, setAccordionSize] = useState<AccordionSize>(
    getDeviceType()
  );

  useEffect(() => {
    setAccordionSize(getDeviceType());
  }, [isDesktop, isTablet]);

  return (
    <div className="flex flex-col items-center netbook:px-0">
      <h1 className="pt-[132px] px-20 mb-20 text-headline-4-semibold max-w-[800px] netbook:pt-[248px] netbook:mb-24 netbook:text-headline-1-semibold text-center">
        Frequently Asked Questions
      </h1>
      <h2 className="mb-64 px-20 text-title-2-medium text-text-secondary text-center">
        DDD 관련해서 궁금하실 질문들을 모아두었어요.
      </h2>
      <main className="max-w-[1200px] px-20 netbook:px-80 tablet:px-32">
        <div className="py-8 flex justify-center gap-8">
          {questionTypeList.map((item) => (
            <TextButton
              variant={questionType === item.type ? "fill" : "outline"}
              size={isDesktop ? "m" : "s"}
              key={item.name}
              onClick={() => setQuestionType(item.type)}
            >
              {item.name}
            </TextButton>
          ))}
        </div>
        <div className="pt-48 pb-[200px] flex flex-col gap-16">
          {faqList[questionType].map((item) => (
            <Accordion
              key={item.title}
              label={item.label}
              title={item.title}
              description={item.description}
              size={accordionSize}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
