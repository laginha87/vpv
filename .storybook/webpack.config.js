const path = require('path');

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ],
          config: {
            path: './.storybook/',
          },
        },
      }
    ],
    include: path.resolve(__dirname, "../")
  });

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            // Typescript compiler
            loader: require.resolve('awesome-typescript-loader'),
          },
          {
            // Webpack loader to generate docgen information from Typescript React components.
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      });

    config.resolve.extensions.push('.ts', '.tsx');


    config.resolve.modules.push(path.resolve(__dirname, "../src"))

    // Return the altered config
    return config;
};