const mix = require("laravel-mix");
const FileIncludeWebpackPlugin = require("file-include-webpack-plugin");

// set public path
mix.setPublicPath("docs");

mix
  .js("src/scripts/main.js", "scripts")
  .postCss("src/styles/main.css", "styles", [
    require("tailwindcss"),
    require("autoprefixer"),
  ])
  .minify("docs/scripts/main.js")
  .minify("docs/styles/main.css")
  .copy("src/static/*", "docs/")
  .copy("src/assets", "docs/assets")
  .webpackConfig((webpack) => {
    return {
      plugins: [
        new FileIncludeWebpackPlugin({
          source: "./src/templates/pages", // relative path to your templates
          destination: "./", // relative path to your docs folder
          replace: [
            {
              regex: /\[\[FILE_VERSION]]/, // additional things to replace
              to: "v=1.0.0",
            },
          ],
        }),
      ],
    };
  });
