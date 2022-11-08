import React from 'react'

import type { HeaderProps } from './Header'
import { Header } from './Header'

const defaultArgs = {
  links: [
    { name: 'Swamp', path: '/' },
    { name: 'Pond', path: '/pond' },
    { name: 'Under the Rock', path: 'under-the-rock' },
  ],
  ctaText: 'Pet the Frog',
  ctaUrl: '/pet-me',
}

export default {
  title: 'Components/Organisms/Header',
  component: Header,
}

export const Default = (args: HeaderProps) => <Header {...args} />
Default.args = {
  ...defaultArgs,
}
