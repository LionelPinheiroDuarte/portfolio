const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const minify = require('html-minifier').minify;
const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('htmlmin', (content, path) =>
      path.endsWith('.html')
        ? htmlmin.minify(content, { minifyCSS: true, minifyJS: true, })
        : content
    )
  }
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr'
  });
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      markdownTemplateEngine: ["njk"],
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      includes: "_includes",
    },
  };
};
