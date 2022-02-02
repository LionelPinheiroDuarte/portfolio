const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("styles");
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      markdownTemplateEngine: ["njk", "md"],
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk", "md"],
      includes: "_includes",
    },
  };
};
