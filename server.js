const Vue = require('vue')
const express = require('express')
const server = express()

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8'),
  clientManifest
})
//new Vue也从server中抽离出来,为每个请求创建一个新的实例,避免共享带来的交叉请求状态污染
// const createApp = require('./src/app')
// const createApp = require('./dist/main.server.js').default

server.use('/dist', express.static('./dist/'))

server.get('*', (req, res) => {
  const context = {
    title: 'vue ssr app',
    meta: `
    <meta charset="utf-8">
    <meta name="keywords" content="science,weibo">
    <meta name="description" content="This page is about the meaning of science,education,culture.">
    `,
    url: req.url
  }
  //为每个请求创建一个新的实例,工厂函数
  // const app = createApp(context).then(app => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
  })
// })

server.listen(8089)
// server.get('*', (req, res) => {
//   const app = new Vue({
//     data: {
//       url: req.url
//     },
//     template: `<div>
//       <h1>Hello Paprika</h1>
//       访问的 URL 是： {{ url }}

//       </div>`
//   })
//   const context = {
//     title: 'vue ssr app',
//     meta: `
//     <meta charset="utf-8">
//     <meta name="keywords" content="science,weibo">
//     <meta name="description" content="This page is about the meaning of science,education,culture.">
//     `,
//   }
  

//   renderer.renderToString(app, context, (err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }
//     // res.end(`
//     //   <!DOCTYPE html>
//     //   <html lang="en">
//     //     <head><meta charset="utf-8"><title>Hello</title></head>
//     //     <body>${html}</body>
//     //   </html>
//     // `)
//     //同步创建了模板 => 上面的代码从server文件里抽离了出来
//     res.end(html)
//   })
// })
