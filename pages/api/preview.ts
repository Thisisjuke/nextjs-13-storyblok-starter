import * as process from 'process'

export default async function preview(req, res) {
  const { slug = '' } = req.query
  const params = req.url.split('?')

  const cleanSecretKey = req?.query?.secret.split('/')[0]
  if (cleanSecretKey !== process.env.PREVIEW_SECRET_TOKEN)
    return res.status(401).json({ message: 'Invalid token' })

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Set cookie to None, so it can be read in the Storyblok iframe
  const cookies = res.getHeader('Set-Cookie')
  res.setHeader(
    'Set-Cookie',
    cookies.map(cookie =>
      cookie.replace('SameSite=Lax', 'SameSite=None;Secure'),
    ),
  )

  // Redirect to the path from entry
  res.redirect(`/${slug}?${params[1]}`)
}
