import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker/locale/ko";
import ProjectItemPopup from "./ProjectItemPopup";
import { Project } from "@/app/project/_types/project";

const meta = {
  title: "Project/ProjectItemPopup",
  component: ProjectItemPopup,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ProjectItemPopup>;

export default meta;
type Story = StoryObj<typeof ProjectItemPopup>;

const mockProject: Project = {
  id: faker.number.int(),
  title: faker.company.name(),
  subTitle: faker.company.catchPhrase(),
  listThumbnail: faker.image.url({ width: 2048, height: 2048 }),
  popupThumbnail: faker.image.url({ width: 1024, height: 576 }),
  popupPdf: faker.image.url({ width: 1024, height: 576 }),
  typeofApp: "web",
  semester: faker.number.int({ min: 1, max: 10 }),
  isNew: faker.datatype.boolean(),
  description: faker.lorem.paragraphs(3),
  keyFeatures: Array.from(
    { length: faker.number.int({ min: 3, max: 6 }) },
    () => faker.lorem.sentence()
  ),
  team: [
    {
      position: "프론트엔드",
      memberNames: Array.from(
        { length: faker.number.int({ min: 2, max: 4 }) },
        () => faker.person.fullName()
      ),
    },
    {
      position: "백엔드",
      memberNames: Array.from(
        { length: faker.number.int({ min: 2, max: 4 }) },
        () => faker.person.fullName()
      ),
    },
    {
      position: "디자인",
      memberNames: Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => faker.person.fullName()
      ),
    },
    {
      position: "PM",
      memberNames: [faker.person.fullName()],
    },
  ],
};

const ProjectItemPopupWithControls = ({
  project,
}: {
  project?: typeof mockProject;
}) => {
  return (
    <div className="p-24">
      <ProjectItemPopup project={project} onClose={() => {}} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ProjectItemPopupWithControls {...args} />,
  args: {
    project: mockProject,
  },
};
