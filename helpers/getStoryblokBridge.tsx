let bridgePromise

const loadBridge = () => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined')
      return

    if (document.getElementById('storyblok-javascript-bridge'))
      return

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://app.storyblok.com/f/storyblok-v2-latest.js'
    script.id = 'storyblok-javascript-bridge'

    script.onerror = (error) => {
      reject(error)
      console.log(error)
    }
    script.onload = () => {
      resolve(new window.StoryblokBridge())
    }

    document.getElementsByTagName('head')[0].appendChild(script)
  })
}

export const getStoryblokBridge = async () => {
  if (!bridgePromise)
    bridgePromise = loadBridge()

  return bridgePromise
}

export const USE_STORYBLOK_BRIDGE = typeof window !== 'undefined'
