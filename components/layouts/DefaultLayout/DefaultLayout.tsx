import React from 'react'

import { Page } from '../../lib/_utils/Grid'

export interface DefaultLayoutProps {
  children?: React.ReactElement
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <Page>{children}</Page>
}
