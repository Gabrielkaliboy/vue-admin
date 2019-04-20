const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production ' ? '/view-admin/' : '/'
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成map文件
  productionSourceMap: false,
  // 配置跨域
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
