const path = require("node:path");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {EleventyI18nPlugin} = require('@11ty/eleventy');
const browserslist = require("browserslist");
const { bundle, browserslistToTargets } = require("lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr'
  });
  eleventyConfig.addCollection("projects_en", function(collection) {
    return collection.getFilteredByGlob("src/en/projects/*.md");
  });
  eleventyConfig.addCollection("projects_fr", function(collection) {
    return collection.getFilteredByGlob("src/fr/projects/*.md");
  });
  eleventyConfig.addPassthroughCopy("./src/styles/fonts");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts.js");
  eleventyConfig.addPassthroughCopy("./src/carousel.js");

  // CSS: each entry file (no leading underscore) is bundled with its @imports
  // and minified; _partials are only inlined, never written on their own.
  const cssTargets = browserslistToTargets(browserslist("defaults"));
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: function (inputContent, inputPath) {
      if (path.basename(inputPath).startsWith("_")) return;
      return () => {
        const { code } = bundle({ filename: inputPath, minify: true, targets: cssTargets });
        return code.toString();
      };
    },
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().substring(0, 10));
  eleventyConfig.addFilter("startsWith", (str, prefix) => str.startsWith(prefix));

  const categories = ["webdev", "automatisation", "script"];
  const languages = ["fr", "en"];

  categories.forEach(category => {
    languages.forEach(lang => {
      eleventyConfig.addCollection(`${category}_${lang}`, function(collectionApi) {
        return collectionApi.getAll().filter(item => {
          return item.data.tags &&
                 item.data.tags.includes(category) &&
                 item.url.startsWith(`/${lang}/`);
        });
      });
    });
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md", "css"],
    dir: {
      input: "src",
      includes: "_includes",
    },
  };
};
