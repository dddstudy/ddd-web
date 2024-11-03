import type { Meta, StoryObj } from '@storybook/react'

import NormalIconButton from './Normal'
import AddIcon from '@/components/svgs/AddIcon'

const meta = {
  title: 'NormalIconButton',
  component: NormalIconButton,
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
    disabled: {
      control: 'boolean',
    },
    showBadge: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof NormalIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    disabled: false,
    icon: <AddIcon />,
  },
}
