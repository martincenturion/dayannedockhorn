module.exports = function(eleventyConfig) {
  // Copy everything in the root directory to the output folder
  eleventyConfig.addPassthroughCopy({ "./src": "./" });

  // Other Eleventy configuration...
  return {
    dir: {
      input: "src",  // Set this to your source directory
      output: "_site"  // Set this to your desired output directory
    }
  };
};