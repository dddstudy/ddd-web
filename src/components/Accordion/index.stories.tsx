import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './index'

const meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: 'beige', width: '800px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['desktop', 'tablet', 'mobile'],
      },
    },
    label: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'desktop',
    label: '레이블',
    title: '아코디언 제목',
    description: '아코디언 디스크립션',
  },
}
