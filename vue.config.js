const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ccse-quiz/' : '/',
    configureWebpack: {
      plugins: [new GenerateSW({
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 /* 7M */
      })]
    }
  }
  