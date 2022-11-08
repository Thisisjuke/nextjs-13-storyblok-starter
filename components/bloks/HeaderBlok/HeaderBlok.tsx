import { storyblokEditable } from '@storyblok/react'
import React from 'react'

import { getHrefFromStoryblokLink } from '../../../helpers/getHrefFromStoryblokLink'
import type { HeaderStoryblok } from '../../../types/storyblok-types'
import { Row } from '../../lib/_utils/Grid'
import { Header } from '../../lib/organisms/Header'

export type HeaderDefaultBlokProps = HeaderStoryblok

export const HeaderBlok = ({ blok }: HeaderDefaultBlokProps) => {
  const { menu, ctaText, ctaUrl } = blok

  return (
    <Row
      {...storyblokEditable(blok)}
      key={blok._uid}
      className={'sticky pt-0 top-0 z-30'}
    >
      <Header
        links={menu}
        ctaText={ctaText}
        ctaUrl={getHrefFromStoryblokLink(ctaUrl)}
      />
    </Row>
  )
}
