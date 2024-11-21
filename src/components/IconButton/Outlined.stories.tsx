import type { Meta, StoryObj } from "@storybook/react";

import OutlinedIconButton from "./Outlined";
import { AddIcon } from "@/components/svgs";

const meta = {
  title: "OutlinedIconButton",
  component: OutlinedIconButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", backgroundColor: "beige", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["normal", "small", "custom"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof OutlinedIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    size: "normal",
    disabled: false,
    children: <AddIcon />,
  },
};
