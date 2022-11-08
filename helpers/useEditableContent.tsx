import { useEffect, useState } from 'react'

import { USE_STORYBLOK_BRIDGE, getStoryblokBridge } from './getStoryblokBridge'

export const useEditableContent = (initialPage) => {
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage])

  useEffect(() => {
    let bridge;
    (async () => {
      if (USE_STORYBLOK_BRIDGE) {
        bridge = await getStoryblokBridge()

        bridge.on('input', (event) => {
          if (event)
            setPage(event.story)
        })
        bridge.on(['change', 'published'], () => window.location.reload())
      }
    })()

    return () => {}
  }, [])

  return page
}
