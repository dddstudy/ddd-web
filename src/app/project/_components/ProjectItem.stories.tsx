import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import ProjectItemComponent from "@/app/project/_components/ProjectItem";

const meta = {
  title: "ProjectItem",
  component: ProjectItemComponent,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectItemComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      thumbnail: faker.image.url(),
      typeofApp: "web",
      semester: 11,
      isNew: true,
      index: 1,
      id: 1,
    },
  },
  render: function Render(args) {
    return (
      <div className="w-[300px]">
        <ProjectItemComponent {...args} />
      </div>
    );
  },
};
