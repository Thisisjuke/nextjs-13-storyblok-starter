import { StoryblokComponent, storyblokEditable } from '@storyblok/react'

import type { PageStoryblok } from '../../../../types/storyblok-types'
import { Page } from '../../../lib/_utils/Grid'

export const PageBlokWrapper = ({ blok }: PageStoryblok) => (
  <Page {...storyblokEditable(blok)} key={blok._uid}>
    <>
      {blok?.header?.content && (
        <StoryblokComponent blok={blok.header.content} key={blok.header._uid} />
      )}

      {blok.body.map(nestedBlok => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}

      {blok?.footer?.content && (
        <StoryblokComponent blok={blok.footer.content} key={blok.footer._uid} />
      )}
    </>
  </Page>
)
