import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { Seo } from '../components/lib/_utils/Seo'
import { resolveRelations } from '../helpers/resolveRelations'
import { useEditableContent } from '../helpers/useEditableContent'

const Page: InferGetStaticPropsType<typeof getStaticProps> = ({ story: s }) => {
  const story = useEditableContent(s)

  return (
    <DefaultLayout>
      <>
        {story?.content?.seo_content?.content && (
          <Seo {...story.content.seo_content?.content} />
        )}
        <StoryblokComponent blok={story.content} />
      </>
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const slug = params.slug
    ? `pages/${(params.slug as string[]).join('/')}`
    : 'pages/home'

  const sbParams = {
    version: preview ? 'draft' : 'published',
    resolve_relations: resolveRelations,
    resolve_links: 'url',
  }

  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  const { data } = await storyblokApi.get('cdn/links/', {
    starts_with: 'pages',
  })

  const paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (
      data.links[linkKey].is_folder
      || data.links[linkKey].slug === 'pages/home'
    )
      return

    const slug = data.links[linkKey].slug
    const splittedSlug = slug.split('/').slice(1)

    paths.push({ params: { slug: splittedSlug } })
  })

  paths.push({ params: { slug: false } })

  return {
    paths,
    fallback: false,
  }
}

export default Page
