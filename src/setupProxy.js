// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function(app) {
//     app.use(
//         createProxyMiddleware('/notion', {
//             target: 'https://api.notion.com',
//             pathRewrite: {
//                 '^/notion': ''
//             },
//             changeOrigin: true
//         })
//     )
// }