import { storyblokEditable } from '@storyblok/react'
import React from 'react'

import type { FooterStoryblok } from '../../../types/storyblok-types'
import { Row } from '../../lib/_utils/Grid'
import { RichText } from '../../lib/_utils/RichText'
import { Footer } from '../../lib/organisms/Footer'

export type FooterDefaultBlokProps = FooterStoryblok

export const FooterBlok = ({ blok }: FooterDefaultBlokProps) => {
  const {
    paragraph,
    copyright,
    sitemap,
  } = blok

  return (
    <Row {...storyblokEditable(blok)} key={blok._uid}>
      <Footer
        paragraph={<RichText document={paragraph} />}
        copyright={copyright}
        links={sitemap}
      />
    </Row>
  )
}
