import { storyblokEditable } from '@storyblok/react'
import React from 'react'

import { getHrefFromStoryblokLink } from '../../../helpers/getHrefFromStoryblokLink'
import type { ErrorDisplayBlokStoryblok } from '../../../types/storyblok-types'
import { Container, Row } from '../../lib/_utils/Grid'
import { RichText } from '../../lib/_utils/RichText'
import { ErrorDisplay } from '../../lib/organisms/ErrorDisplay/ErrorDisplay'

export type ErrorDisplayBlokProps = ErrorDisplayBlokStoryblok

export const ErrorDisplayBlok = ({ blok }: ErrorDisplayBlokProps) => {
  const { errorCode, title, hint, ctaText, ctaUrl, customId } = blok

  return (
    <Row {...storyblokEditable(blok)} key={blok._uid} id={customId}>
      <Container>
        <ErrorDisplay
          errorCode={errorCode}
          title={<RichText document={title} />}
          hint={<RichText document={hint} />}
          ctaText={ctaText}
          ctaUrl={getHrefFromStoryblokLink(ctaUrl)}
        />
      </Container>
    </Row>
  )
}
