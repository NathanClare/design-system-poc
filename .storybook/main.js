const path = require('path')

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
    };
    
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];

    return config;
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}