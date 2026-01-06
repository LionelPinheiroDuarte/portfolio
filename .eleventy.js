const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const {EleventyI18nPlugin} = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'fr'
  });
  eleventyConfig.addCollection("projects_en", function(collection) {
    return collection.getFilteredByGlob("src/en/projects/*.md");
  });
  eleventyConfig.addCollection("projects_fr", function(collection) {
    return collection.getFilteredByGlob("src/fr/projects/*.md");
  });
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts.js");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      markdownTemplateEngine: ["njk"],
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      input: "src",
      includes: "_includes",
    },
  };


  const categories = ["webdev", "automatisation", "script"];
  const languages = ["fr", "en"];
  
  // Create a collection for each category and language
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


    
};
