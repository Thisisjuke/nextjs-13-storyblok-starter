import React from 'react'

import ProfilePicture from '../../../../assets/images/profile.jpg'
import type { TestimonialCardProps } from './TestimonialCard'
import { TestimonialCard } from './TestimonialCard'

const defaultArgs = {
  description: 'Phasellus mattis turpis ac dui malesuada, a cursus nibh fermentum. In varius tortor ut interdum iaculis. Pellentesque quis porta nisi, et varius libero. Vestibulum egestas malesuada urna, quis volutpat purus iaculis sed. Phasellus rhoncus sapien neque, vitae porttitor velit aliquam at. Sed in lectus odio. Cras ullamcorper ex a ultrices malesuada.',
  name: 'Arthur',
  position: 'Astrub Zap Enjoyer',
  imageSrc: ProfilePicture,
  imageAlt: 'profile picture',
}

export default {
  title: 'Components/Atoms/TestimonialCard',
  component: TestimonialCard,
  defaultArgs,
}

export const Default = (args: TestimonialCardProps) => <TestimonialCard {...args} />
Default.args = {
  ...defaultArgs,
}
