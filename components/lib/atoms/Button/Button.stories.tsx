import React from 'react'

import type { ButtonProps } from './Button'
import { Button, ButtonSizeType, ButtonVariantType } from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
}

const defaultArgs = {
  children: 'I am a Button !',
  href: '/go/to/somewhere',
  onClick: () => console.log('clicked !'),
}

export const AsPrimary = (args: ButtonProps) => <Button {...args} />
AsPrimary.args = {
  ...defaultArgs,
  variant: ButtonVariantType.PRIMARY,
}

export const AsOutlined = (args: ButtonProps) => <Button {...args} />
AsOutlined.args = {
  ...defaultArgs,
  variant: ButtonVariantType.OUTLINED,
}

export const AsDisabledLink = (args: ButtonProps) => <Button {...args} />
AsDisabledLink.args = {
  ...defaultArgs,
  disabled: true,
}

export const Sizes = () => (
  <div className={'flex gap-x-8 items-center justify-center'}>
    <Button size={ButtonSizeType.SMALL}>Small</Button>
    <Button size={ButtonSizeType.MEDIUM}>Medium</Button>
    <Button size={ButtonSizeType.LARGE}>Large</Button>
  </div>
)
