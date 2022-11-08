import { getStoryblokApi } from '@storyblok/react'

import { initStoryblok } from '../_app'

export default async function revalidate(req, res) {
  if (req.query.secret !== process.env.STORYBLOK_SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid token' })

  try {
    initStoryblok({})
    const storyblokApi = getStoryblokApi()

    const body = req.body
    const { data } = await storyblokApi.get(`cdn/stories/${body?.story_id}`, {})

    console.log('Storyblok::story', data)
    const slug = data?.story?.full_slug
      ?.replaceAll('pages/', '')
      ?.replaceAll('home', '/')
      ?.replaceAll('//', '/')
      ?.trim()
    console.log('Storyblok::slug', slug)

    if (slug)
      await res.revalidate(slug || '/')

    return res.json({ revalidated: true })
  }
  catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
