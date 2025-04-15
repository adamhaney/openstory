module.exports = function(eleventyConfig) {
    // Copy static files to output
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/*.png");
    // Copy static files to output
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/*.png");
    
    return {
        pathPrefix: "/openstory/",
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};
