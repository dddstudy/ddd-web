import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./index";

const meta = {
  title: "TextInput",
  component: TextInput,
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
      options: ["s", "l"],
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "s",
    placeholder: "입력",
  },
};

export const Large: Story = {
  args: {
    size: "l",
    placeholder: "입력",
  },
};
