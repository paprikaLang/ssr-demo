import { createApp } from './app'

import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// 客户端特定引导逻辑……
const { app, router, store } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
	if (window.__INITIAL_STATE__) {
	  store.replaceState(window.__INITIAL_STATE__)
	}
	app.$mount('#app')
})

