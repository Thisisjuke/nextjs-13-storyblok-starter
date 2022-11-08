import type { MultilinkStoryblok } from '../types/storyblok-types'

const sanitizeUrl = (url) => {
  // Used here because all our pages are in the sub-folder "pages" inside the Storyblok Admin panel.
  return url.replace('pages', '')
}

export const getHrefFromStoryblokLink = (link: MultilinkStoryblok): string => {
  let url = link?.url || ''
  if (link?.linktype === 'url')
    return link.url

  if (link?.linktype === 'story') {
    if (link.url === '' && link.fieldtype === 'multilink')
      url = link.cached_url
    else
      url = link.story?.url === '/'
  }
  if (link.path && link.path !== '')
    url = link.path

  if (!url || url === 'home' || url === 'pages/home')
    return '/'

  return sanitizeUrl(url)
}
