import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from './components/Hello.vue'

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Hello },
      { path: '/world/:id', component: () => import('./components/World.vue')},
      { path: '/item/:id', component: () => import('./components/Item.vue')}
    ]
  })
}