const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/LL-PVP-Guide/" : "/",
  transpileDependencies: true
})