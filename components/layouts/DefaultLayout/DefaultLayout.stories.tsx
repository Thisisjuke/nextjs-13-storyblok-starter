import React from 'react'

import type { DefaultLayoutProps } from './DefaultLayout'
import { DefaultLayout } from './DefaultLayout'

const defaultArgs = {
  children: (
    <div
      className={
        'p-12 h-[30vh] w-full bg-gray text-white flex items-center justify-center border border-grey-darker rounded-md'
      }
    >
      Layout Item
    </div>
  ),
}

export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
}

export const Default = (args: DefaultLayoutProps) => (
  <DefaultLayout {...args} />
)
Default.args = {
  ...defaultArgs,
}
