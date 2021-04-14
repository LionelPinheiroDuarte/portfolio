const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('styles')
    return {
      passthroughFileCopy: true
    },
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
  }