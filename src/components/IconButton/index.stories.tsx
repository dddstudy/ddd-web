import type { Meta, StoryObj } from '@storybook/react'
import NormalIconButton from './Normal'
import OutlinedIconButton from './Outlined'
import BackgroundIconButton from './Background'
import SvgAddIcon from '../svgs/AddIcon'


const meta = {
  title: 'Components/IconButton',
  tags: ['autodocs'],
} satisfies Meta

export default meta

// NormalIconButton meta & stories
const normalMeta = {
  title: 'Components/IconButton/Normal',
  component: NormalIconButton,
  tags: ['autodocs'],
  argTypes: {
    showBadge: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: false },
  },
} satisfies Meta<typeof NormalIconButton>

type NormalStory = StoryObj<typeof normalMeta>

export const Normal: NormalStory = {
  args: {
    icon: <SvgAddIcon />,
    showBadge: false,
    disabled: false,
  },
}

// OutlinedIconButton meta & stories
const outlinedMeta = {
  title: 'Components/IconButton/Outlined',
  component: OutlinedIconButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof OutlinedIconButton>

type OutlinedStory = StoryObj<typeof outlinedMeta>

export const Outlined: OutlinedStory = {
  args: {
    icon: <SvgAddIcon />,
    disabled: false,
  },
}

// BackgroundIconButton meta & stories
const backgroundMeta = {
  title: 'Components/IconButton/Background',
  component: BackgroundIconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
    // Background에만 있는 추가 props
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof BackgroundIconButton>

type BackgroundStory = StoryObj<typeof backgroundMeta>

export const Background: BackgroundStory = {
  args: {
    icon: <SvgAddIcon />,
    color: 'primary',
  },
}

// meta 내보내기
// export default { normalMeta, outlinedMeta, backgroundMeta }
// 또는 원하는 meta를 default로 지정
// export { backgroundMeta as default }
