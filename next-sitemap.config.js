const siteBaseUrl = process.env.ENV_BASE_URL || 'http://localhost:3000'

module.exports = {
  siteUrl: siteBaseUrl,
  generateRobotsTxt: true,
  sourceDir: './.next',
  outDir: './public',
  exclude: [],
  additionalPaths: () => {
    return []
  },
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
