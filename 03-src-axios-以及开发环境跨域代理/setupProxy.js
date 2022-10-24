const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://127.0.0.1:5000',  // 服务器地址
      changeOrigin: true,   //默认为false，  true 发送请求头中host会设置成target， 否则为原始的host(http://127.0.0.1:3000)
      pathRewrite: {'^/api': ''}
    })
  )
}