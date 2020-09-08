module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    "md",
    "html"
  ]);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
};
