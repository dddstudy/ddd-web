import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";
import ProjectItemComponent from "@/app/project/_components/ProjectItem";

const meta = {
  title: "Project/ProjectItem",
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
      subTitle: faker.lorem.sentence(),
      listThumbnail: faker.image.url({ width: 2048, height: 2048 }),
      popupThumbnail: faker.image.url({ width: 1024, height: 576 }),
      popupPdf: faker.image.url({ width: 1024, height: 576 }),
      typeofApp: "web",
      semester: 11,
      isNew: true,
      id: 1,
      description: faker.lorem.sentence(),
      keyFeatures: [faker.lorem.sentence(), faker.lorem.sentence()],
      team: [
        {
          position: faker.lorem.word(),
          memberNames: [faker.person.fullName()],
        },
      ],
    },
    index: faker.number.int({ min: 1, max: 10 }),
  },
  render: function Render(args) {
    return (
      <div className="w-[300px]">
        <ProjectItemComponent {...args} />
      </div>
    );
  },
};
