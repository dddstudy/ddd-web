import { useAtomValue } from "jotai";

import NameInput from "@/components/Notification/NameInput";
import PositionButtonGroup from "@/components/Notification/PositionButtonGroup";
import SupportPathButtonGroup from "@/components/Notification/SupportPathButtonGroup";
import EmailInput from "@/components/Notification/EmailInput";
import TextButton from "@/components/TextButton";
import { isNotificationFormValidAtom } from "@/store/notification/atom";

export default function NotificationForm() {
  const isNotificationFormValid = useAtomValue(isNotificationFormValidAtom);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
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
  );
}
