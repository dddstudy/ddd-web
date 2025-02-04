import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="flex w-full desktop:pl-[472px] netbook:pl-[80px] tablet:pl-[64px] mobile:pl-[24px] desktop:pr-[360px] netbook:pr-[86px] tablet:pr-[64px] mobile:pr-[24px] desktop:pt-[320px] netbook:pt-[240px] tablet:pt-[240px] mobile:pt-[160px] desktop:pb-[304px] netbook:pb-[240px] tablet:pb-[240px] mobile:pb-[160px] bg-[#0C0E0F] bg-[url('/imgs/idea.webp')] bg-no-repeat desktop:bg-[length:884px_910px] desktop:bg-[center_483px] netbook:bg-[length:752px_775px] netbook:bg-[112px_404px] tablet:bg-[length:706px_727px] tablet:bg-[center_404px] mobile:bg-none">
      <div className="flex flex-col desktop:gap-[320px] netbook:gap-[81px] tablet:gap-[217px] mobile:gap-[188px]">
        <div className="flex flex-col gap-32">
          <div className="text-text-inverse desktop:text-headline-7-medium netbook:text-headline-7-medium tablet:text-title-2-medium mobile:text-title-3-medium">
            이 사람들이 모여 하는 일은
          </div>
          <div className="text-text-inverse desktop:text-[64px] desktop:font-[700] desktop:leading-[80px] netbook:text-headline-4-semibold tablet:text-headline-5-bold mobile:text-headline-7-bold pr-0 desktop:pr-[166px] tablet:pr-[50px]">
            아이데이션을 시작으로 기획, 디자인, 개발까지 하나의 뜻깊은 서비스를
            만들어 세상에 선보여요
          </div>
        </div>
        <div className="flex flex-col gap-40 desktop:pl-[168px]">
          <div className="text-text-inverse text-title-3-medium mobile:text-body-1-medium">
            PM, 디자이너 그리고 개발자가 하나의 크루(팀)로 활동해요.
          </div>
          <div>
            <div className="pt-24 pb-72 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">01</div>
              <div className="flex flex-col gap-16 mobile:gap-12">
                <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                  Orientation
                </div>
                <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                  크루원들과 처음 만나서 이야기를 나누는 날
                </div>
              </div>
            </div>
            <div className="pt-36 pb-72 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">02</div>
              <div className="flex flex-col gap-16 mobile:gap-12">
                <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                  Boosting Day
                </div>
                <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                  하나의 아이디어를 선정하고 서비스의 방향성을 구체화하는 날
                </div>
              </div>
            </div>
            <div className="pt-36 pb-72 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">03</div>
              <div className="flex flex-col desktop:gap-48 netbook:gap-48 tablet:gap-40 mobile:gap-40">
                <div className="flex flex-col gap-16 mobile:gap-12">
                  <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                    Group Session
                  </div>
                  <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                    동일한 직군의 크루원들과 친목을 나누며 소통할 수 있는 날
                  </div>
                </div>
                <Image
                  src="/imgs/image_groupsession.webp"
                  alt="group_session"
                  width={661}
                  height={284}
                />
              </div>
            </div>
            <div className="pt-36 pb-72 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">04</div>
              <div className="flex flex-col gap-16 mobile:gap-12">
                <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                  User Test
                </div>
                <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                  더 나은 서비스를 위해 프로토타입 기반 피드백 받는 날
                </div>
              </div>
            </div>
            <div className="pt-36 pb-72 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">05</div>
              <div className="flex flex-col gap-16 mobile:gap-12">
                <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                  Tiki-Taka Day
                </div>
                <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                  서비스는 잠시 내려놓고 직군 상관없이 다함께 교류하는 날
                </div>
              </div>
            </div>
            <div className="pt-36 flex gap-64 mobile:gap-20 items-start">
              <div className="text-text-inverse text-body-1-medium">06</div>
              <div className="flex flex-col desktop:gap-48 netbook:gap-48 tablet:gap-40 mobile:gap-40">
                <div className="flex flex-col gap-16 mobile:gap-12">
                  <div className="capitalize text-text-inverse desktop:text-[44px] font-[600] leading-[100%] netbook:text-[44px] tablet:text-[38px] mobile:text-[24px]">
                    Hackathon
                  </div>
                  <div className="text-text-inverse desktop:text-title-2-medium netbook:text-title-2-medium tablet:text-title-3-medium mobile:text-body-2-medium">
                    오직 서비스 출시를 위해 앞만 보고 달리는 날
                  </div>
                </div>
                <Image
                  src="/imgs/image_hackathon.webp"
                  alt="hackathon"
                  width={661}
                  height={284}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
