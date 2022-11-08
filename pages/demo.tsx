// This is a demo page used to display information. Delete this once you start using this repository !
import Image from 'next/image'
import Head from 'next/head'
import { Button } from '../components/lib/atoms/Button'

export default function Demo() {
  return (
      <>
          <Head>
              <title>NextJS 13 - StoryBlok Starter</title>
              <meta name={'description'} content={'This is demo application for the NextJS 13 - StoryBlok Starter. Find the repository on github: https://github.com/Thisisjuke/nextjs-13-storyblok-starter.'} />
          </Head>
      <div className={'overflow-hidden bg-gray-50 py-16 h-screen flex flex-col justify-center relative'}>
        <Button href={'/'} className={'absolute top-4 left-4'}>
            Go back to Home!
        </Button>
        <div className={'mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8'}>
            <div className={'mx-auto max-w-prose text-base lg:max-w-none'}>
                <div className={'flex gap-x-2 items-center'}>
                    <h2 className={'text-lg font-semibold text-accent font-inter align-middle mt-1'}>Made by Liege Arthur</h2>
                    <a target={'_blank'} rel={'noopener noreferrer'} href={'https://github.com/Thisisjuke'}>
                        <svg className={'h-8 w-8 text-gray-400'} viewBox={'0 0 24 24'}><path d={'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'} fill={'currentColor'}/></svg>
                    </a>
                </div>
                <h1 className={'mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'}>NextJS 13 - StoryBlok Starter</h1>
            </div>
            <div className={'relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72'}>
                <p className={'text-lg text-gray-500'}>
                    This website is used for a demo of NextJS 13 + StoryBlok. You can find more information on the following links.
                </p>
            </div>
            <div className={'lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'}>
                <div className={'relative z-10 flex flex-col gap-y-8'}>
                    <div className={'prose prose-indigo mx-auto text-gray-500 lg:max-w-none'}>
                        <p className={'default-title !font-sans mb-8 text-gray-900'}>
                            What&apos;s in the box ?
                        </p>
                        <ul role={'list'}>
                            <li>Demo pages with <b>Header</b> / <b>Footer</b> / <b>HeadingBlok</b> / <b>TestimonialsSlider</b> / <b>SEO</b>, managed by Storyblok CMS.</li>
                            <li>Storyblok CMS setup with custom Bridge.</li>
                            <li>Auto generated sitemap.</li>
                            <li>TypeScript: CMS types are auto-generated.</li>
                            <li>TailwindCSS setup.</li>
                            <li>Storybook setup with all NextJS mocks you need.</li>
                        </ul>
                    </div>
                    <div className={'relative'}>
                        <a className={'group'} target={'_blank'} rel={'noopener noreferrer'} href={'https://github.com/Thisisjuke/nextjs-13-storyblok-starter'}>
                            <dt>
                                <div className={'absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white'}>
                                    <svg className={'h-6 w-6'} viewBox={'0 0 24 24'}><path fill={'currentColor'} d={'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z'}/></svg>
                                </div>
                                <p className={'group-hover:underline ml-16 text-lg font-medium leading-6 text-gray-900'}>Github repository</p>
                            </dt>
                            <dd className={'mt-2 ml-16 text-base text-gray-500'}>
                                Contains all the code and a detailed README.md to easily start using this repository.
                            </dd>
                        </a>
                    </div>
                    <div className={'relative'}>
                        <a className={'group'} target={'_blank'} rel={'noopener noreferrer'} href={'https://scribehow.com/shared/How_to_init_Storyblok_CMS_to_work_with_NextJS_13__Story_Blok_Starter__YBPqInJ0QdSZ1-1GW-vNeg'}>
                        <dt>
                            <div className={'absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white'}>
                                <svg className={'h-6 w-6'} viewBox={'0 0 24 24'}><path fill={'currentColor'} d={'M13.953 11.462H9.088v2.34h4.748c.281 0 .538-.118.749-.305c.187-.187.304-.468.304-.819a1.404 1.404 0 0 0-.257-.842c-.188-.234-.398-.374-.679-.374zm.164-2.83c.21-.14.304-.445.304-.843c0-.35-.094-.608-.257-.771a.935.935 0 0 0-.608-.234H9.088v2.105h4.374c.234 0 .468-.117.655-.257zM21.251 0H2.89c-.585 0-1.053.468-1.053 1.03v18.385c0 .562.468.912 1.03.912H5.58V24l3.368-3.65h12.304c.562 0 .913-.35.913-.935V1.053c0-.562-.351-1.03-.936-1.03zm-3.087 14.9a2.827 2.827 0 0 1-1.006 1.03c-.445.28-.936.538-1.497.655c-.562.14-1.17.257-1.801.257H5.579v-13.1h9.403c.468 0 .866.094 1.24.305c.351.187.679.444.936.748c.524.64.806 1.443.795 2.27c0 .608-.164 1.192-.468 1.754a2.924 2.924 0 0 1-1.403 1.263c.748.21 1.333.585 1.778 1.123c.42.561.631 1.286.631 2.199c0 .584-.117 1.076-.35 1.497z'}/></svg>
                            </div>
                            <p className={'group-hover:underline ml-16 text-lg font-medium leading-6 text-gray-900'}>Step by step setup of StoryBlok CMS</p>
                        </dt>
                        </a>
                        <dd className={'mt-2 ml-16 text-base text-gray-500'}>
                            Complete, with Pictures and exhaustive list of what you have to do to setup StoryBlok CMS with this repository.
                            You can find a <a className={'underline text-semibold'} href={'https://github.com/Thisisjuke/nextjs-13-storyblok-starter/tree/master/.doc/CMS-Setup'}>Github hosted textual version here</a> (with more hints and code relative explanations here).
                        </dd>
                    </div>

                    <div className={'relative'}>
                        <a className={'group'} rel={'noopener noreferrer'} href={'https://medium.com/@liegearthur/nextjs-13-manage-your-content-using-storyblok-cms-a-clean-repository-starter-1362b9db303f'}>
                        <dt>
                            <div className={'absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white'}>
                                <svg className={'h-6 w-6'} viewBox={'-2 -2 24 24'}><g fill={'currentColor'}><path d={'M6.186 7.632a.392.392 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.236.236 0 0 0-.089.226v5.668a.236.236 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.534.534 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.515.515 0 0 0 .136-.442V7.632z'}/><path d={'M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'}/></g></svg>
                            </div>
                            <p className={'group-hover:underline ml-16 text-lg font-medium leading-6 text-gray-900'}>Medium Article</p>
                        </dt>
                        </a>
                        <dd className={'mt-2 ml-16 text-base text-gray-500'}>
                            Article to present features of this repository in a more friendly way! Share it with your colleagues!
                        </dd>
                    </div>
                </div>
                <div className={'relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none'}>
                    <svg
                        className={'absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'}
                        width={404}
                        height={384}
                        fill={'none'}
                        viewBox={'0 0 404 384'}
                        aria-hidden={'true'}
                    >
                        <defs>
                            <pattern id={'bedc54bc-7371-44a2-a2bc-dc68d819ae60'} x={0} y={0} width={20} height={20} patternUnits={'userSpaceOnUse'}>
                                <rect x={0} y={0} width={4} height={4} className={'text-gray-200'} fill={'currentColor'} />
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill={'url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'} />
                    </svg>
                    <blockquote className={'relative rounded-lg bg-white shadow-lg'}>
                        <div className={'rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'}>
                            <div className={'relative mt-8 text-lg font-medium text-gray-700'}>
                                <svg
                                    className={'absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200'}
                                    fill={'currentColor'}
                                    viewBox={'0 0 32 32'}
                                    aria-hidden={'true'}
                                >
                                    <path d={'M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z'} />
                                </svg>
                                <p className={'relative'}>
                                    Thanks you for visiting this page. I hope you&apos;ve found the information you needed about this Starter!
                                    This stack has been used on one of a project I worked on and I am glad to share with you some tips and snippets that I found useful when playing with NextJS or StoryBlok.
                                    I hope you will find them useful to ✌. If so, feel free to leave a star on the github repository ⭐.
                                </p>
                            </div>
                        </div>
                        <cite className={'relative flex items-center rounded-b-lg bg-primary py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10'}>
                            <span className={'relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform'}>
                                <a target={'_blank'} rel={'noopener noreferrer'} href={'https://github.com/Thisisjuke'}>
                                    <div className={'relative h-16 w-16 flex-shrink-0 rounded-full border-2 border-accent cursor-pointer'}>
                                        <Image
                                            className={'rounded-full'}
                                            src={'https://avatars.githubusercontent.com/u/23522065?v=4'}
                                            alt={'Profile picture'}
                                            fill={true}
                                        />
                                    </div>
                                </a>
                            </span>
                            <p className={'relative ml-4 font-semibold leading-6 text-indigo-200 sm:ml-24 sm:pl-1'}>
                                <span className={'font-semibold text-white sm:inline'}>Liege Arthur</span>{' '}
                                <span className={'sm:inline'}>Dev Fullstack</span>
                            </p>
                        </cite>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}
