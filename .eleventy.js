module.exports = function(eleventyConfig) {
  // Copy everything in the root directory to the output folder
  eleventyConfig.addPassthroughCopy({ "./": "./" });

  // Other Eleventy configuration...
};