const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? 'https://matthattan.github.io/LL-PVP-Guide/'
  : '/',
  transpileDependencies: true
})