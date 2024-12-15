import { useAtomValue, useSetAtom } from "jotai";

import NameInput from "@/components/Notification/NameInput";
import PositionButtonGroup from "@/components/Notification/PositionButtonGroup";
import SupportPathButtonGroup from "@/components/Notification/SupportPathButtonGroup";
import EmailInput from "@/components/Notification/EmailInput";
import TextButton from "@/components/TextButton";
import { isNotificationFormValidAtom } from "@/store/notification/atom";
import { setRegisterSuccessAndAutoResetAtom } from "@/store/notification/action";

export default function NotificationForm() {
  const isNotificationFormValid = useAtomValue(isNotificationFormValidAtom);

  const setRegisterStep = useSetAtom(setRegisterSuccessAndAutoResetAtom);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // TODO: API 연결
    setRegisterStep();
  };

  return (
    <div className="w-full h-full netbook:px-48 desktop:px-64 px-28 netbook:pb-52 pb-32 overflow-auto">
      <div className="flex flex-col gap-12">
        <h2 className="text-[28px] netbook:text-[38px] desktop:text-[48px] text-[#1E1E1E] font-[700] line-height-[36px] netbook:line-height-[50px] desktop:line-height-[60px]">
          12기 모집 알림 신청
        </h2>
        <h3 className="text-[18px] tablet:text-title-2-medium text-text-secondary">
          DDD 12기 크루 모집이 시작되면, 가장 먼저 이메일로 안내드릴게요!
        </h3>
      </div>
      <div className="desktop:pt-52 netbook:pt-48 pt-40 flex flex-col desktop:gap-[44px] netbook:gap-40 gap-32">
        <form className="flex flex-col gap-44" onSubmit={handleSubmit}>
          <NameInput />
          <PositionButtonGroup />
          <SupportPathButtonGroup />
          <EmailInput />
          <TextButton
            disabled={!isNotificationFormValid}
            size="l"
            className="self-end"
          >
            모집 알림 신청하기
          </TextButton>
        </form>
      </div>
    </div>
  );
}
