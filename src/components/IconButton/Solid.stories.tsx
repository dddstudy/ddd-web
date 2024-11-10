import type { Meta, StoryObj } from '@storybook/react'

import SolidIconButton from './Solid'
import AddIcon from '@/components/svgs/AddIcon'

const meta = {
  title: 'SolidIconButton',
  component: SolidIconButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: 'beige', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SolidIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    size: 's',
    disabled: false,
    children: <AddIcon />,
  },
}
