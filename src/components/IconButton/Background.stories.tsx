import type { Meta, StoryObj } from '@storybook/react'

import BackgroundIconButton from './Background'
import AddIcon from '@/components/svgs/AddIcon'

const meta = {
  title: 'BackgroundIconButton',
  component: BackgroundIconButton,
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
  },
} satisfies Meta<typeof BackgroundIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Background: Story = {
  args: {
    disabled: false,
    icon: <AddIcon />,
  },
}
