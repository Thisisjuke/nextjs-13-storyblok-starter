import React from 'react'

import type { HeadingsProps } from './Headings'
import { Headings, TitlePositionType } from './Headings'

const defaultArgs = {
  title: 'Titre',
  subtitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos?',
  variant: TitlePositionType.CENTER,
}

export default {
  title: 'Components/Atoms/Headings',
  component: Headings,
}

export const Default = (args: HeadingsProps) => <Headings {...args} />
Default.args = {
  ...defaultArgs,
}
