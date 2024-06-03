module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/style.css");
  eleventyConfig.addPassthroughCopy("android-chrome-192x192.png");
  eleventyConfig.addPassthroughCopy("android-chrome-512x512.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addFilter("paragraphify", value => {
    return value.split("\n").map(p => `<p>${p}</p>`).join("");
  });
};