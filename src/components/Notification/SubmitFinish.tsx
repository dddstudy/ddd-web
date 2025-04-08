import Image from "next/image";
import CheckImage from "@/assets/imgs/image 6.png";

export default function SubmitFinish() {
  return (
    <div className="flex flex-col justify-center items-center px-28 pb-36">
      <Image src={CheckImage} alt="알림 신청 완료" />
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-headline-6-bold pt-28 pb-40 text-center">
          12기 모집 알림 신청이
          <br />
          완료되었어요!
        </h3>
        <div className="text-body-1-regular">
          DDD 크루 모집 시, 이메일로 알려드릴게요.
        </div>
      </div>
      <div className="text-body-4-regular text-center text-blue-40">
        3초 뒤에 자동으로 화면이 닫힙니다.
      </div>
    </div>
  );
}
