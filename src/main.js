import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store'
import Bus from './lib/bus'

Vue.config.productionTip = false

// 如何让他注册到根实例里？
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
