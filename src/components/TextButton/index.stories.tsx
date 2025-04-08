import type { Meta, StoryObj } from "@storybook/react";

import TextButton from "./index";

const meta = {
  title: "TextButton",
  component: TextButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["s", "m", "l"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Text",
  },
};

export const Fill: Story = {
  args: {
    variant: "fill",
    children: "Text",
  },
};
