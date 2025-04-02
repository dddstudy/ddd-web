import type { Meta, StoryObj } from "@storybook/react";
import TabComponent from "@/app/project/_components/Tab";

const meta = {
  title: "Project/Tab",
  component: TabComponent,
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
} satisfies Meta<typeof TabComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tab: {
      label: "ALL",
      value: 1,
      active: true,
    },
  },
  render: function Render(args) {
    return <TabComponent {...args} />;
  },
};
