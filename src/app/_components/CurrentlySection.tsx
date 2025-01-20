import Image from "next/image";

import backgroundImage from "@/assets/imgs/future.jpg";
import TextButton from "@/components/TextButton";
import { RightIcon } from "@/components/svgs";

export default function CurrentlySection() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col gap-[88px] max-w-[1200px] items-center">
        <div className="text-[#fff] text-center text-[20px] font-[200] font-">
          Recruitment
        </div>
        <div className="flex flex-col gap-40">
          <div
            className="text-center text-[156px] font-[600]"
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
            <div className="text-[#fff] text-title-3-regular text-center">
              다음 크루원 모집을 위해 DDD 매니저들이 열심히 준비 중이에요.
              <br />
              크루원 모집 준비가 끝나면 그 누구보다 빠르게 연락 드릴게요!
            </div>
            <TextButton>
              <div className="flex items-center">
                <div>모집 알림 신청하기</div>
                <RightIcon />
              </div>
            </TextButton>
          </div>
        </div>
      </div>
    </section>
  );
}
