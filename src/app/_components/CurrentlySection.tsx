"use client";

import { useSetAtom } from "jotai";

import { screenMediaQuery } from "@/app/styles/screens";
import TextButton from "@/components/TextButton";
import { RightIcon } from "@/components/svgs";
import useMediaQuery from "@/hooks/useMediaQuery";
import { registerStepAtom } from "@/store/notification/atom";

export default function CurrentlySection() {
  const isTablet = useMediaQuery(screenMediaQuery.netbook);
  const isDesktop = useMediaQuery(screenMediaQuery.desktop);

  const setRegisterStep = useSetAtom(registerStepAtom);

  const handleClickOpen = () => {
    setRegisterStep("form");
  };

  return (
    <section className="flex items-center justify-center w-full bg-[url('/imgs/future.webp')] bg-lightgray bg-cover bg-center bg-no-repeat desktop:py-[244px] netbook:py-[244px] tablet:py-[198px] mobile:py-[160px] bg-[rgba(12,14,15,0.7)] backdrop-blur-sm">
      <div className="flex flex-col gap-[88px] max-w-[1200px] items-center">
        <div className="text-[#fff] text-center text-[20px] font-[400] mobile:text-[18px]">
          Recruitment
        </div>
        <div className="flex flex-col gap-40">
          <div
            className="text-center desktop:text-[156px] netbook:text-[108px] tablet:text-[80px] mobile:text-[40px] font-[600] leading-[100%]"
            style={{
              background:
                "linear-gradient(180deg, #FFF -3.04%, rgba(255, 255, 255, 0.00) 95.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Currently Under Renewal
          </div>
          <div className="flex flex-col gap-20 items-center">
            <div className="text-[#fff] text-title-3-regular text-center tablet:text-body-3-regular mobile:text-body-3-regular">
              다음 크루원 모집을 위해 DDD 매니저들이 열심히 준비 중이에요.
              <br />
              크루원 모집 준비가 끝나면 그 누구보다 빠르게 연락 드릴게요!
            </div>
            <TextButton
              size={isDesktop ? "l" : isTablet ? "m" : "s"}
              onClick={handleClickOpen}
            >
              <div className="flex items-center">
                <div>모집 알림 신청하기</div>
                <RightIcon className="w-[24px] h-[24px]" />
              </div>
            </TextButton>
          </div>
        </div>
      </div>
    </section>
  );
}
