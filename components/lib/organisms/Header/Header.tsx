import Link from 'next/link'
import { useRouter } from 'next/router'
import ctl from '@netlify/classnames-template-literals'
import { getHrefFromStoryblokLink } from '../../../../helpers/getHrefFromStoryblokLink'
import { ReactComponent as Logo } from '../../../../assets/icons/logo.svg'
import {
  Button,
  ButtonSizeType,
  ButtonVariantType,
} from '../../atoms/Button'

export interface SubpagesItemType {
  name: string
  path: string
}
export interface HeaderItemType {
  subpages: Array<SubpagesItemType>
  name: string
  path: string
}
export interface HeaderProps {
  links: Array<HeaderItemType>
  ctaText: string
  ctaUrl: string
}

export const Header = ({
  links,
  ctaText,
  ctaUrl,
}: HeaderProps) => {
  const router = useRouter()

  return (
    <div
      className={'relative w-full shadow bg-gray-darker items-center justify-between'}
    >
      <div className={'w-full flex items-center justify-between py-4 px-20'}>
        <div className={'flex gap-x-4 items-center'}>
          <Logo className={'h-12 w-12'} />
          <span className={'text-primary text-xl text-bold'}>This is a Frog!</span>
        </div>
        <div className={'hidden md:flex'}>
          {links.map((link) => {
            const realHref = getHrefFromStoryblokLink(link)
            const isCurrentPage = router.asPath === realHref

            return (
                <div key={link.name}>
                  <Link href={realHref}>
                    <span className={ctl(`
                        ${isCurrentPage && 'text-blue-lighter border-b-2 border-accent'}
                        focus:outline-none
                        p-4 hover:text-blue-light hover:border-b-2 hover:border-accent cursor-pointer font-semibold tracking-wide list-none
                    `)}>
                      {link.name}
                    </span>
                  </Link>
                </div>
            )
          })}
        </div>

        {/* CTA */}
        <Button
            href={ctaUrl}
            size={ButtonSizeType.MEDIUM}
            variant={ButtonVariantType.PRIMARY}
            className={'font-semibold'}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  )
}
