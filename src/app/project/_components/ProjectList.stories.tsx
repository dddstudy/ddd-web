import type { Meta, StoryObj } from "@storybook/react";
import ProjectList from "@/app/project/_components/ProjectList";
import { faker } from "@faker-js/faker";
import { Project } from "@/app/project/_types/project";

const meta = {
  title: "Project/ProjectList",
  component: ProjectList,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProjectList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProjects: Project[] = faker.helpers.multiple(
  () => ({
    id: faker.number.int(),
    title: faker.lorem.sentence(),
    subTitle: faker.lorem.sentence(),
    listThumbnail: faker.image.url(),
    popupThumbnail: faker.image.url(),
    typeofApp: "web",
    semester: faker.number.int({ min: 1, max: 10 }),
    isNew: faker.datatype.boolean(),
    description: faker.lorem.paragraph(),
    keyFeatures: Array.from(
      { length: faker.number.int({ min: 3, max: 6 }) },
      () => faker.lorem.sentence()
    ),
    team: [
      {
        position: faker.lorem.word(),
        memberNames: Array.from(
          { length: faker.number.int({ min: 2, max: 4 }) },
          () => faker.person.fullName()
        ),
      },
    ],
  }),
  { count: faker.number.int({ min: 3, max: 20 }) }
);

export const Default: Story = {
  args: {
    projects: mockProjects,
  },
  render: function Render(args) {
    return <ProjectList {...args} />;
  },
};
