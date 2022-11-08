import React from 'react'

import Logo from '../../../../assets/images/logo.svg'
import type { FooterProps } from './Footer'
import { Footer } from './Footer'

const defaultArgs = {
  name: 'Wizards Technologies',
  imageSrc: Logo,
  imageAlt: 'Logo',
  paragraph: 'We think too small, like the frog at the bottom of the well. He thinks the sky is only as big as the top of the well. If he surfaced, he would have an entirely different view.',
  copyright: '© 2022 This is a Frog! All rights reserved.',
  links: [
    { name: 'Swamp', path: '/swamp' },
    { name: 'Pond', path: '/pond' },
    { name: 'Under the Rock', path: 'under-the-rock' },
  ],
}

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
}

export const Default = (args: FooterProps) => <Footer {...args} />
Default.args = {
  ...defaultArgs,
}
