import type { Options } from '@splidejs/react-splide'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import type { ReactNode } from 'react'
import React from 'react'

export interface HorizontalInfiniteSliderProps {
  children: ReactNode
}

const options = {
  type: 'loop',
  pagination: false,
  arrows: false,
  perPage: 3,
  snap: false,
  resetProgress: false,
  drag: false,
  autoScroll: {
    speed: 1,
  },
  breakpoints: {
    1080: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
}

export const HorizontalInfiniteSlider = ({
  children,
}: HorizontalInfiniteSliderProps) => {
  return (
    <Splide className={'max-w-[100vw]'} hasTrack={false} extensions={{ AutoScroll }} options={options as Options}>
      <SplideTrack>
        {React.Children.map(children, child => (
          <SplideSlide className={'px-4'}>{child}</SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}
