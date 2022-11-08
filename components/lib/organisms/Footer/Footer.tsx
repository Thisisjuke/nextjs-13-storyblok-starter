import type { ReactNode } from 'react'

import Link from 'next/link'
import { ReactComponent as Logo } from '../../../../assets/icons/logo.svg'

export interface FooterItemType {
  Subpages: any
  name: string
  path: string
}
export interface FooterProps {
  paragraph?: ReactNode
  copyright?: string
  links?: Array<FooterItemType>
}

export const Footer = ({
  paragraph,
  copyright,
  links,
}: FooterProps) => {
  return (
    <footer
      className={'relative bottom-0 w-full px-9 md:px-20 flex flex-col shadow bg-gray-100'}
      aria-labelledby={'footer-heading'}
    >
      <div className={'grid md:w-3/5 pt-12'}>
          <div className={'flex gap-x-4 items-center'}>
            <Logo className={'h-12 w-12'} />
            <span className={'text-primary text-xl text-bold'}>This is a Frog!</span>
          </div>
      </div>
      <div
        className={'grid grid-cols-1 md:grid-cols-4 items-start justify-between gap-x-16 gap-y-6 py-8 text-center md:text-left'}
      >
        <div className={'grid md:col-span-2 items-start gap-4'}>
          {paragraph && <div className={'font-extralight'}>{paragraph}</div>}
        </div>
      </div>
      <hr className={'border-primary'} />
      <div
        className={'py-8 grid md:grid-cols-2 items-center justify-center md:justify-between font-light text-primary text-sm text-center md:text-left md:gap-4'}
      >
        {copyright && <p>{copyright}</p>}
        <div
          className={'flex flex-col items-center md:flex-row-reverse gap-x-6'}
        >
          {links && (
            <>
              {links?.map((item, index) => (
                  <Link key={`link-${index}`} href={item.path}>
                    <span className={'cursor-pointer focus:outline-none hover:underline'} >
                      {item.name}
                    </span>
                  </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </footer>
  )
}
