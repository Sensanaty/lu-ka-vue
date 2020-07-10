module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
            .rule("raw")
            .test(/\.txt$/)
            .use("raw-loader")
            .loader("raw-loader")
            .end();

        config.module
            .rule("md")
            .test(/\.md/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler")
            .options({
                raw: true
            });
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
