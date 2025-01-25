import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import HoverSwitch from "./index";

const meta = {
  title: "HoverSwitch",
  component: HoverSwitch,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof HoverSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "다음 기수 신청",
    onClick: () => {},
  },
};
