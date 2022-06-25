const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      '/book': {
        target: 'http://127.0.0.1:8890',
        // pathRewrite:{'^/api':''},
      }
    }
  }
})
