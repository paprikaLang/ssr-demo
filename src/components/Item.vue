<!-- 在路由组件内 -->
<template>
  <div>{{ item.text }} ---- {{ fooCount }}</div>
</template>
<script>
  // 在这里导入模块，而不是在 `store/index.js` 中
import fooStoreModule from '../store/modules/foo'

export default {
  asyncData ({ store, route }) {
    store.registerModule('foo', fooStoreModule)
    return Promise.all([
        // 触发 action 后，会返回 Promise
        store.dispatch('fetchItem', route.params.id),
        store.dispatch('foo/inc')
    ])

  },
  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed () {
    this.$store.unregisterModule('foo')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item () {
      return this.$store.state.items[this.$route.params.id]
    },
    fooCount () {
      return this.$store.state.foo.count
    }
  }
}
</script>