module.exports = {
  core: { builder: "webpack5" },

  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config, { configType }) => {
    const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    config.resolve.alias = {
      "next/image": require.resolve("./__mocks__/next-image.js"),
    };

    return config;
  },
};
