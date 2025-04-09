import { AccordionGroup } from "@/components/Accordion";
import faqList from "@/app/_components/Recruit/FAQSection/faqList";

export default function FAQSection() {
  return (
    <section>
      <div className="flex flex-col items-center netbook:px-0">
        <h1 className="text-white text-center pt-[132px] px-20 mb-20  max-w-[800px] text-headline-s netbook:pt-[248px] netbook:mb-24 netbook:text-headline-2xl">
          자주 묻는 질문
        </h1>
        <h2 className="mb-64 px-20 text-title-2-medium text-gray-20 text-center">
          DDD 관련해서 궁금하실 질문들을 모아두었어요.
        </h2>
        <main className="max-w-[1200px] px-20 netbook:px-80 tablet:px-32">
          <div className="pt-48 pb-[200px]">
            <AccordionGroup list={faqList} />
          </div>
        </main>
      </div>
    </section>
  );
}
