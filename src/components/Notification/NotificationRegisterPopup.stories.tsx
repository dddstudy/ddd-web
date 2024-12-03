import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import NotificationRegisterPopupComponent from "@/components/Notification/Popup";
import TextButton from "@/components/TextButton";

const meta = {
  title: "NotificationRegisterPopup",
  component: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <TextButton onClick={() => setIsOpen(true)}>열기</TextButton>
        <NotificationRegisterPopupComponent
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <TextButton onClick={() => setIsOpen(false)}>닫기</TextButton>
        </NotificationRegisterPopupComponent>
      </>
    );
  },
} satisfies Meta<typeof NotificationRegisterPopupComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationRegisterPopup: Story = {};
