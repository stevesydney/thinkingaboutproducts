module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    "md",
    "html"
  ]);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
};
