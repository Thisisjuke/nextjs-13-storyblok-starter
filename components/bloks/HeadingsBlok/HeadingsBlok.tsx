import { storyblokEditable } from '@storyblok/react'
import React from 'react'

import type { HeadingBlokStoryblok } from '../../../types/storyblok-types'
import { Container, Row } from '../../lib/_utils/Grid'
import { RichText } from '../../lib/_utils/RichText'
import { Headings } from '../../lib/atoms/Headings'

export type HeadingBlokProps = HeadingBlokStoryblok

export const HeadingsBlok = ({ blok }: HeadingBlokProps) => {
  const { title, subtitle } = blok

  return (
    <Row className={'pt-8'} {...storyblokEditable(blok)} key={blok._uid}>
      <Container className={'py-8 md:w-1/2'}>
        <Headings
          title={<RichText document={title} />}
          subtitle={
            <RichText document={subtitle}/>
          }
        />
      </Container>
    </Row>
  )
}
