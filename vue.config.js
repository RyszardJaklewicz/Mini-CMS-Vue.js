const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  },
  transpileDependencies: true,
  publicPath: "https://localhost/vue-004/dist"
})