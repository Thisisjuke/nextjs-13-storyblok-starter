import '@splidejs/react-splide/css'
import '../styles/tailwind.css'

import { apiPlugin, storyblokInit } from '@storyblok/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

import { PageBlokWrapper } from '../components/bloks/_utils/PageBlokWrapper'
import { FooterBlok } from '../components/bloks/FooterBlok'
import { HeaderBlok } from '../components/bloks/HeaderBlok'
import { TestimonialsSliderBlok } from '../components/bloks/TechnosSliderBlok'
import { HeadingsBlok } from '../components/bloks/HeadingsBlok'
import { ErrorDisplayBlok } from '../components/bloks/ErrorDisplayBlok'

const components = {
  'error-display-blok': ErrorDisplayBlok,
  'footer': FooterBlok,
  'header': HeaderBlok,
  'heading-blok': HeadingsBlok,
  'page': PageBlokWrapper,
  'testimonials-slider-blok': TestimonialsSliderBlok,
}

export const initStoryblok = (options = {}) =>
  storyblokInit({
    bridge: false,
    accessToken: process.env.REACT_STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      cache: { type: 'memory' },
    },
    use: [apiPlugin],
    components,
    ...options,
  })
initStoryblok()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Component {...pageProps} />
          <Analytics />
      </>

  )
}
