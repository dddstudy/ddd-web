import type { Meta, StoryObj } from "@storybook/react";

import FloatingIconButton from "./Floating";
import { AddIcon } from "@/components/svgs";

const meta = {
  title: "FloatingIconButton",
  component: FloatingIconButton,
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
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof FloatingIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Floating: Story = {
  args: {
    disabled: false,
    children: <AddIcon />,
  },
};
