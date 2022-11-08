import type { ReactNode } from 'react'
import Image from 'next/image'

export interface TestimonialCardProps {
  description: ReactNode
  imageSrc: string
  imageAlt: string
  name: string
  position: string
}

export const TestimonialCard = ({ description, imageSrc, imageAlt, name, position }: TestimonialCardProps) => {
  return (
        <div className={'flex flex-col md:w-[320px] xl:w-[480px] h-full bg-primary p-8 md:p-12 border border-indigo-900 md:py-16 rounded-md'}>
            <blockquote className={'md:flex md:flex-grow md:flex-col'}>
                {description && (
                    <div className={'relative text-lg font-medium text-white md:flex-grow'}>
                        <svg
                            className={'absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-accent'}
                            fill={'currentColor'}
                            viewBox={'0 0 32 32'}
                            aria-hidden={'true'}
                        >
                            <path d={'M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z'} />
                        </svg>
                        <div className={'relative mt-4'}>{description}</div>
                    </div>
                )}
                <footer className={'mt-8'}>
                    <div className={'flex items-center items-start'}>
                        {imageSrc && (
                            <div className={'relative h-12 w-12 flex-shrink-0 rounded-full border-2 border-accent'}>
                                <Image
                                    className={'rounded-full'}
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill={true}
                                />
                            </div>
                        )}
                        {(name || position) && (
                            <div className={'ml-4'}>
                                {name && <div className={'text-base font-medium text-white'}>{name}</div>}
                                {position && <div className={'text-base font-medium text-indigo-200'}>{position}</div>}
                            </div>
                        )}
                    </div>
                </footer>
            </blockquote>
        </div>
  )
}
