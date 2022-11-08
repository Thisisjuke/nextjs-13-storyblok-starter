import type { ReactNode } from 'react'

import { Button } from '../../atoms/Button'

export interface ErrorDisplayProps {
  errorCode?: string
  title?: ReactNode
  hint?: ReactNode
  ctaText?: string
  ctaUrl?: string
}

export const ErrorDisplay = ({
  errorCode,
  title,
  hint,
  ctaText,
  ctaUrl,
}: ErrorDisplayProps) => {
  return (
    <div
      className={
        'min-h-[80vh] px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center md:px-8'
      }
    >
      <div className={'mx-auto max-w-max'}>
        <main className={'md:flex'}>
          {errorCode && (
            <div
              className={
                'text-4xl font-bold tracking-tight text-primary md:text-[6rem] md:mt-4'
              }
            >
              {errorCode}
            </div>
          )}
          <div className={'sm:ml-6'}>
            <div className={'md:border-l md:border-gray-200 sm:pl-6'}>
              {title && (
                <h1 className={'text-4xl text-primary font-bold tracking-tight md:text-5xl'}>
                  {title}
                </h1>
              )}
              {hint && (
                <div className={'mt-1 text-secondary text-lg text-gray-300'}>{hint}</div>
              )}
            </div>
            {ctaText && (
              <div
                className={
                  'mt-10 flex space-x-3 md:border-l md:border-transparent md:pl-6'
                }
              >
                <Button href={ctaUrl}>{ctaText}</Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
