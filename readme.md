### 1. **createApp**
```
vue init webpack-simple ssr
```
配置 webpack.server.config.js
```
entry: './src/entry-server.js'
```
生成 /dist/main.server.js
```
webpack --config ./build/webpack.server.config.js
```
server.js
```
const createApp = require('./dist/main.server.js').default
const app = createApp(context)
renderer.renderToString(app, context, (err,html) => res.end(html))
```
`node server` 后还不能交互( 'v-model' 无效), 实际上这部分由 client 完成:
```
webpack --config ./build/webpack.client.config.js
```

`index.template.html` 中导入  `main.client.js` 文件, 实现交互.


### 2. **Router Store**

- 工厂函数: 每个实例都是一个新的而且不会交叉污染

**Router** :
```py
ERROR: Unexpected token 'import'
{ path: '/world/:id', component: () => import('./components/World.vue')}


FIX: npm i babel-preset-stage-2
{
  "presets": [
    ["env", { "modules": false}],
    "stage-2"
  ]
}
```
**Store** : 自动序列化为 `window.__INITIAL_STATE__`, 并注入 HTML .
```
Component.asyncData({
  store,
  route: router.currentRoute
})

context.state = store.state
```

<img src="https://paprika-dev.b0.upaiyun.com/WMggT438xyA9pKK5Sk7Rt5V3VF1ns9rjmtkQAS3F.jpeg" style="width: 150px;" />

### 3. Bundle Renderer

- 解耦: 服务器无需传入一个应用程序了, bundle 自动创建, 并且内置 source map 支持.
```
renderer.renderToString(context, (err, html) => res.end(html))
```

<img src="https://paprika-dev.b0.upaiyun.com/tgat4cnOdcFqkncF68quv7jU9yJ10K8EgrhPmG6D.jpeg" style="width: 150px;" />

### 4. CSS

```
NODE_ENV=production webpack --config ./build/webpack.server.config.js
```
```py
TypeError: chunk.sortModules is not a function
FIX: npm i @webpack@3
``` 
- 从依赖模块导入样式
webpack.entry.client.js: 
```
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: 'popper.js'
}),
```
<div style="width: 100px;">
  <img src="https://paprika-dev.b0.upaiyun.com/ceWKSD5WmKEUAQjgdo9yw5EzUwnhPDjtofiwMqEH.jpeg" style="width: 60px;" />
</div>
