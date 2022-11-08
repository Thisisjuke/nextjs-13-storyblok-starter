import ctl from '@netlify/classnames-template-literals'
import type { ReactNode } from 'react'
import React, { forwardRef } from 'react'

export enum GridNodeType {
  DIV = 'div',
  SECTION = 'section',
  NAV = 'nav',
  MAIN = 'main',
}

export interface GridType {
  readonly id?: string
  readonly children?: ReactNode
  readonly className?: string
  readonly as?: GridNodeType
}

const ROW_MAX_WIDTH = 'max-w-[120rem]' // 1920px
const CONTAINER_MAX_WIDTH = 'max-w-[90rem]' // 1440px

export const Page = forwardRef<any, GridType>(
  (
    {
      children,
      className,
      as = GridNodeType.DIV,
      ...props
    }: GridType,
    ref,
  ) => {
    const NodeType = as

    return (
      <NodeType
        ref={ref}
        className={ctl(`
            ${className}
            flex flex-col items-center w-full relative max-w-[100vw]
        `)}
        {...props}
      >
        {children}
      </NodeType>
    )
  },
)

export const Row = forwardRef<any, GridType>(
  (
    {
      children,
      className = '',
      as = GridNodeType.DIV,
      ...props
    }: GridType,
    ref,
  ) => {
    const NodeType = as

    return (
      <NodeType
        ref={ref}
        className={ctl(`
          ${className}
          ${ROW_MAX_WIDTH}
          flex flex-wrap w-full justify-center
        `)}
        {...props}
      >
        {children}
      </NodeType>
    )
  },
)

export const Container = forwardRef<any, GridType>(
  (
    {
      children,
      className,
      as = GridNodeType.DIV,
      ...props
    }: GridType,
    ref,
  ) => {
    const NodeType = as

    return (
      <NodeType
        ref={ref}
        className={ctl(`
          ${className}
          ${CONTAINER_MAX_WIDTH}
          flex flex-col container
          gap-y-2 sm:gap-y-4 md:gap-y-8 p-2 sm:p-4 md:p-8
        `)}
        {...props}
      >
        {children}
      </NodeType>
    )
  },
)
