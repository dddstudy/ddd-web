import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { faker } from "@faker-js/faker/locale/ko";
import ProjectItemPopup from "./ProjectItemPopup";
import TextButton from "@/components/TextButton";
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
  thumbnail: faker.image.url({ width: 800, height: 450 }),
  typeofApp: "web",
  semester: faker.number.int({ min: 1, max: 10 }),
  isNew: faker.datatype.boolean(),
  index: faker.number.int({ min: 1, max: 10 }),
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
  project: typeof mockProject;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-24">
      <TextButton onClick={() => setIsOpen(true)}>
        프로젝트 상세 보기
      </TextButton>
      <ProjectItemPopup
        project={project}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ProjectItemPopupWithControls {...args} />,
  args: {
    project: mockProject,
  },
};
