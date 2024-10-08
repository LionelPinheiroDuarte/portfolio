const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr'
  });
  eleventyConfig.addCollection("projects_en", function(collection) {
    return collection.getFilteredByGlob("./en/projects/*.md");
  });
  eleventyConfig.addCollection("projects_fr", function(collection) {
    return collection.getFilteredByGlob("./fr/projects/*.md");
  });
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      markdownTemplateEngine: ["njk"],
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      includes: "_includes",
    },
  };
};
