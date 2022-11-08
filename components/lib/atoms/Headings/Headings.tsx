import ctl from '@netlify/classnames-template-literals'
import type { ReactNode } from 'react'

export enum TitlePositionType {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

export interface HeadingsProps {
  title?: ReactNode
  subtitle?: ReactNode
  variant?: TitlePositionType
}

export const Headings = ({
  title,
  subtitle,
  variant = TitlePositionType.CENTER,
}: HeadingsProps) => {
  return (
    <div
      className={ctl(
        `w-full flex flex-col gap-4
        ${variant === TitlePositionType.LEFT && 'text-left'}
        ${variant === TitlePositionType.CENTER && 'text-center'}
        ${variant === TitlePositionType.RIGHT && 'text-right'}`,
      )}
    >
      {title && <h1 className={'default-title'}>{title}</h1>}
      {subtitle && <h2 className={'default-title !text-xl'}>{subtitle}</h2>}
    </div>
  )
}
