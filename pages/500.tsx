import { StoryblokComponent, getStoryblokApi } from '@storyblok/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { Seo } from '../components/lib/_utils/Seo'
import { resolveRelations } from '../helpers/resolveRelations'
import { useEditableContent } from '../helpers/useEditableContent'

const NotFoundPage: InferGetStaticPropsType<typeof getStaticProps> = ({
  story: s,
}) => {
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

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const sbParams = {
    version: preview ? 'draft' : 'published',
    resolve_relations: resolveRelations,
    resolve_links: 'url',
  }

  const storyblokApi = getStoryblokApi()

  const { data } = await storyblokApi.get(
    'cdn/stories/globals/error-page',
    sbParams,
  )

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  }
}

export default NotFoundPage
