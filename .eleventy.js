const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/*.css");
  eleventyConfig.addPassthroughCopy("src/js/*.js");
  eleventyConfig.addPassthroughCopy("src/images/*");
  eleventyConfig.addPassthroughCopy("src/resources/*");
  eleventyConfig.setWatchJavaScriptDependencies(true);

  eleventyConfig.addPassthroughCopy({"legacy/save-the-school.html": "/save-the-school.html"})
  eleventyConfig.addPassthroughCopy({"legacy/donate.html": "/donate.html"})

  // eleventyConfig.addFilter("")

  eleventyConfig.addFilter("newsDate", (dateObj) => {
    let f = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
    return f.format(dateObj);
  });

  // Create a "shortcode" for images
  eleventyConfig.addNunjucksAsyncShortcode('img', async function (
    src,
    alt,
    outputFormat = 'jpeg'
  ) {
    if (alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }

    let stats = await Image(src, {
      widths: [640],
      formats: [outputFormat],
      urlPath: '/static/',
      outputDir: './_output/static/',
    });

    let props = stats[outputFormat].pop();

    return `<img src="${props.url}" width="${props.width}" height="${props.height}" alt="${alt}">`;
  });

  eleventyConfig.addCollection("topNews", function (collectionApi) {
    // get unsorted items
    return collectionApi
      .getFilteredByTag("news")
      .sort((a, b) => b.date - a.date)
      .reduce((acc, item) => {
        if (acc.length < 4) {
          acc.push(item);
        }
        return acc;
      }, []);
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
