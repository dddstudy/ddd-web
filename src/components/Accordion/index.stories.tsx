import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./index";

const meta = {
  title: "Accordion",
  component: Accordion,
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
      options: ["desktop", "tablet", "mobile"],
    },
    label: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    size: "desktop",
    label: "모집 및 지원",
    title: "지원 방법이 궁금해요.",
    description: (
      <p>
        지원 방법은 간단해요.
        <br />
        <br />
        모집 기간에 열리는 모집 링크(구글 폼)를 통해 지원해 주세요.
        <br />
        필요한 내용은 모집 링크에 다 있어요!
        <br />
        <br />
        <strong>1차 서류</strong> 지원 이후에 <strong>2차 인터뷰</strong>를
        진행할 분들에게 따로 연락을 드려요.
      </p>
    ),
  },
};

export const Tablet: Story = {
  args: {
    size: "tablet",
    label: "모집 및 지원",
    title: "지원 방법이 궁금해요.",
    description: (
      <p>
        지원 방법은 간단해요.
        <br />
        <br />
        모집 기간에 열리는 모집 링크(구글 폼)를 통해 지원해 주세요.
        <br />
        필요한 내용은 모집 링크에 다 있어요!
        <br />
        <br />
        <strong>1차 서류</strong> 지원 이후에 <strong>2차 인터뷰</strong>를
        진행할 분들에게 따로 연락을 드려요.
      </p>
    ),
  },
};

export const Mobile: Story = {
  args: {
    size: "mobile",
    label: "모집 및 지원",
    title: "지원 방법이 궁금해요.",
    description: (
      <p>
        지원 방법은 간단해요.
        <br />
        <br />
        모집 기간에 열리는 모집 링크(구글 폼)를 통해 지원해 주세요.
        <br />
        필요한 내용은 모집 링크에 다 있어요!
        <br />
        <br />
        <strong>1차 서류</strong> 지원 이후에 <strong>2차 인터뷰</strong>를
        진행할 분들에게 따로 연락을 드려요.
      </p>
    ),
  },
};
