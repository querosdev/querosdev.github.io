module.exports = function (eleventyConfig) {
  // Static assets live at the project root and are copied verbatim to _site.
  // (Paths are project-root relative, independent of the templates' input dir.)
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    // Pages set their own .html permalinks, so URLs match the old site exactly.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
