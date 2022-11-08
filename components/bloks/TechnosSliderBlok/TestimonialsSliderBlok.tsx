import { storyblokEditable } from '@storyblok/react'
import React from 'react'

import { Row } from '../../lib/_utils/Grid'
import {
  HorizontalInfiniteSlider,
} from '../../lib/molecules/HorizontalInfiniteSlider'
import { TestimonialCard } from '../../lib/atoms/TestimonialCard'
import { RichText } from '../../lib/_utils/RichText'

export type TechnoSliderBlokProps = any

export const TestimonialsSliderBlok = ({ blok }: TechnoSliderBlokProps) => {
  const { testimonials, customId } = blok

  return (
    <Row className={'py-8 md:py-16 overflow-x-hidden'} {...storyblokEditable(blok)} key={blok._uid} id={customId}>
      <HorizontalInfiniteSlider>
        {testimonials.map(({ content }) => {
          return (
                <TestimonialCard
                    key={content?._uid}
                    description={<RichText document={content?.description} />}
                    imageSrc={content?.profilPicture.filename}
                    imageAlt={content?.profilPicture.alt}
                    name={content?.name}
                    position={content?.position}
                />
          )
        })}
      </HorizontalInfiniteSlider>
    </Row>
  )
}
