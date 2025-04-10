import Image from "next/image";

export default function CrewMembersSection() {
  return (
    <section className="bg-[#000] desktop:pt-[240px] desktop:pr-[360px] desktop:pb-0 desktop:pl-[360px] netbook:pt-0 netbook:pb-0 netbook:pl-0 netbook:pr-0 tablet:pt-0 tablet:pb-0 tablet:pl-0 tablet:pr-0 mobile:pt-[160px] mobile:pr-[24px] mobile:pb-0 mobile:pl-[24px] text-text-inverse">
      <div className="relative desktop:pt-0 desktop:pl-0 desktop:pr-0">
        <div className="absolute mobile:relative desktop:top-0 netbook:top-[240px] tablet:top-[200px] left-[50%] translate-x-[-50%] text-center desktop:text-[102px] desktop:font-[600] desktop:leading-[102px] netbook:text-[80px] netbook:font-[600] netbook:leading-[100%] tablet:text-[56px] tablet:font-[600] tablet:leading-[100%] mobile:text-[38px] mobile:font-[600] mobile:leading-[100%] desktop:mb-0 netbook:mb-0 tablet:mb-0 mobile:mb-[22px] w-[100%]">
          Expectations from
          <br />
          Crew Members
        </div>
        <div className="desktop:pt-[140px] desktop:pr-[50px] desktop:pb-[80px] desktop:pl-[50px] netbook:pt-[360px] netbook:pr-[115px] netbook:pb-[88px] netbook:pl-[115px] tablet:pt-[289px] tablet:pr-[64px] tablet:pb-[72px] tablet:pl-[64px] mobile:p-0 desktop:mb-0 netbook:mb-0 tablet:mb-0 mobile:mb-[72px]">
          <Image
            src="/imgs/image_crewmembers.webp"
            alt="crewmembers"
            width={1100}
            height={734}
            className="rounded-[16px]"
          />
        </div>
        <div className="text-center desktop:text-[48px] desktop:font-[600] desktop:leading-[100%] netbook:text-headline-5-bold tablet:text-headline-6-bold mobile:text-title-1-bold mb-[48px] mobile:mb-[32px]">
          일에 대한 <strong className="text-blue-40">열정과 고민</strong>, 함께
          나눠요!
        </div>
        <div className="text-center desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-3-medium">
          나와 같은 혹은 다른 직군의 사람들과 교류하며
          <br />
          재미, 성취감뿐만 아니라 친구도 함께 얻어갔으면 해요!
          <br />
          <br />
          사회 생활하면서 직장 동료 외에 새로운 친구를 만들기 어렵다는 걸
          <br />그 누구보다도 잘 알고 있기에 도움이 되고 싶어요.
        </div>
      </div>
      <div className="flex items-center flex-col-reverse desktop:flex-col desktop:gap-[196px] desktop:pt-[120px] desktop:pb-[240px] netbook:gap-0 netbook:pt-[200px] netbook:pr-[80px] netbook:pb-[200px] netbook:pl-[80px] tablet:gap-0 tablet:pt-[200px] tablet:pr-[64px] tablet:pb-[200px] tablet:pl-[64px] mobile:gap-0 mobile:pt-[160px] mobile:pb-[160px]">
        <div className="flex flex-col gap-20">
          <div className="text-center text-headline-7-bold mobile:text-title-2-bold">
            DDD를 응원해주시는
          </div>
          <div className="text-center text-title-2-medium mobile:text-body-2-medium">
            감사한 파트너 후원사분들이에요
            <br />
            DDD은 비영리단체로 언제나 열려있어요!
          </div>
        </div>
        <div>
          <div className="text-center text-[20px] font-[400] leading-[100%]">
            Sponsor
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[40px] desktop:pt-[40px] netbook:pt-[40px] netbook:pb-[72px] tablet:pt-[28px] tablet:pb-[48px] mobile:pt-[28px] mobile:pb-[48px] mobile:gap-[20px_40px]">
            <div className="w-[160px] h-[160px] flex items-center justify-center">
              <Image
                src="/imgs/image_elice.webp"
                alt="elice"
                width={161}
                height={50}
              />
            </div>
            <div className="w-[160px] h-[160px] flex items-center justify-center">
              <Image
                src="/imgs/image_ictcoc.webp"
                alt="ictcoc"
                width={160}
                height={90}
              />
            </div>
            <div className="w-[160px] h-[160px] flex items-center justify-center">
              <Image
                src="/imgs/image_asan-nanum.webp"
                alt="asan-nanum"
                width={160}
                height={32}
              />
            </div>
            <div className="w-[160px] h-[160px] flex items-center justify-center">
              <Image
                src="/imgs/image_hanbit.webp"
                alt="hanbit"
                width={136}
                height={83}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
