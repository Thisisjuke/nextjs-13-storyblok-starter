import React from 'react'
import TestimonialCardStory from '../../atoms/TestimonialCard/TestimonialCard.stories'

import type { TestimonialCardProps } from '../../atoms/TestimonialCard'
import { TestimonialCard } from '../../atoms/TestimonialCard'
import type { HorizontalInfiniteSliderProps } from './HorizontalInfiniteSlider'
import {
  HorizontalInfiniteSlider,
} from './HorizontalInfiniteSlider'

export default {
  title: 'Components/Molecules/HorizontalInfiniteSlider',
  component: HorizontalInfiniteSlider,
}

const defaultArgs = {
  children: new Array(6).fill(<TestimonialCard {...TestimonialCardStory.defaultArgs as unknown as TestimonialCardProps} />),
}

export const Default = (args: HorizontalInfiniteSliderProps) => (
  <HorizontalInfiniteSlider {...args} />
)
Default.args = {
  ...defaultArgs,
}
