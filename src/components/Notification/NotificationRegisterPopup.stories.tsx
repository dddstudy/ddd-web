import type { Meta, StoryObj } from "@storybook/react";
import { useSetAtom } from "jotai";

import NotificationRegisterPopupComponent from "@/components/Notification/Popup";
import TextButton from "@/components/TextButton";
import { registerStepAtom } from "@/store/notification/atom";
import { postNotificationHandler } from "@/hooks/usePostNotification";

const meta = {
  title: "NotificationRegisterPopup",
  component: () => {
    const setRegisterStep = useSetAtom(registerStepAtom);

    const handleClickOpen = () => {
      setRegisterStep("form");
    };

    return (
      <>
        <TextButton onClick={handleClickOpen}>열기</TextButton>
        <NotificationRegisterPopupComponent />
      </>
    );
  },
  parameters: {
    msw: {
      handlers: [postNotificationHandler],
    },
  },
} satisfies Meta<typeof NotificationRegisterPopupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationRegisterPopup: Story = {};
