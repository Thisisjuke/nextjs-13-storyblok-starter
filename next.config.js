/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['picsum.photos', 'a.storyblok.com', 'avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })
    return config
  },
  output: 'standalone',
}

module.exports = nextConfig
