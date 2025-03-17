import type { Meta, StoryObj } from "@storybook/react";
import TabListComponent from "@/app/project/_components/TabList";

const meta = {
  title: "TabList",
  component: TabListComponent,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: "3em", width: "100%", backgroundColor: "#EAEAEA" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    all: {
      tab: {
        label: "ALL",
        value: 1,
        active: true,
      },
    },
    mobile: {
      tab: {
        label: "Mobile",
        value: 2,
        active: false,
      },
    },
    web: {
      tab: {
        label: "Web",
        value: 3,
        active: false,
      },
    },
  },
};
