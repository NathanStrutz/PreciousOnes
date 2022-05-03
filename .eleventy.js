// const { DateTime } = require("luxon");
// import luxon from "luxon";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/*.css");
  eleventyConfig.addPassthroughCopy("src/js/*.js");
  eleventyConfig.addPassthroughCopy("src/images/*");
  eleventyConfig.setWatchJavaScriptDependencies(true);

  eleventyConfig.addFilter("newsDate", (dateObj) => {
    let f = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
    return f.format(dateObj);
  });

  eleventyConfig.addCollection("topNews", function (collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTag("news").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
