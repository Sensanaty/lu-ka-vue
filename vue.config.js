module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .use("babel-loader")
            .loader("babel-loader")
            .end()
            .use("vue-svg-loader")
            .loader("vue-svg-loader");

        config.module
            .rule("raw")
            .test(/\.txt$/)
            .use("raw-loader")
            .loader("raw-loader")
            .end();
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_colors.scss";`
            }
        }
    }
};
