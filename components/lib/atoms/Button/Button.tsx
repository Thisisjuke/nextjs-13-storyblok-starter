import ctl from '@netlify/classnames-template-literals'
import type { CSSProperties, ReactNode } from 'react'
import React, { forwardRef } from 'react'

import Link from 'next/link'

export enum ButtonSizeType {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export enum ButtonVariantType {
  PRIMARY = 'PRIMARY',
  OUTLINED = 'OUTLINED',
}

export interface ButtonProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  href?: string
  onClick?: () => void
  size?: ButtonSizeType
  disabled?: boolean
  fullWidth?: boolean
  variant?: ButtonVariantType
}

const ButtonClasses = (
  size: ButtonSizeType,
  variant: ButtonVariantType,
  disabled = false,
  fullWidth = false,
) =>
  ctl(`
  ${
    variant === ButtonVariantType.PRIMARY
    && ctl(`
      bg-primary text-white
      hover:bg-primary/70
    `)
  }
  ${
    variant === ButtonVariantType.OUTLINED
    && ctl(`
      bg-transparent text-primary border border-2 border-primary
      hover:bg-primary/10
    `)
  }

  ${size === ButtonSizeType.SMALL && 'px-4 py-3 text-xs'}
  ${size === ButtonSizeType.MEDIUM && 'px-4 py-3 text-md'}
  ${size === ButtonSizeType.LARGE && 'px-6 py-3 text-lg'}
  ${disabled && 'bg-gray-400 text-white cursor-not-allowed'}
  ${fullWidth ? 'w-full' : 'w-auto grow-0'}
  
  rounded-md
  cursor-pointer whitespace-nowrap
  transition-colors select-none 
  inline-flex items-center justify-center
  focus:outline-none
`)

const StyledButton = forwardRef<HTMLElement, ButtonProps>(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
    const {
      children,
      size = ButtonSizeType.MEDIUM,
      variant = ButtonVariantType.PRIMARY,
      disabled = false,
    } = props

    const { fullWidth, className, ...legacyProps } = props

    return (
        <button
            className={ctl(`
                ${className}
                ${ButtonClasses(size, variant, disabled, fullWidth)}
            `)}
            ref={ref as React.LegacyRef<HTMLButtonElement>}
            {...legacyProps}
        >
            {children}
        </button>
    )
  },
)

export const Button = forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { fullWidth } = props

    return props.href
      ? (
      <Link
        className={ctl(`
            ${fullWidth && 'w-full'}
          ${props.disabled && 'pointer-events-none'}
        `)}
        href={props.href}
      >
        <StyledButton {...props} ref={ref} />
      </Link>
        )
      : (
      <StyledButton {...props} ref={ref} />
        )
  },
)
