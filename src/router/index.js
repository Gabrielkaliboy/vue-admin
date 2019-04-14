import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

export default new Router({
  // mode默认模式，默认为hash形式为http://localhost:8080/#/?food=banana
  // 这里有#

  // 除了hash，还可以是html5中的hsitory模式，这个 模式需要后端的配合,url里面
  // 是没有#号的，记得这个模式如果匹配不到资源，需要跳转到一个默认的页面
  mode: 'history',
  routes: routes
})
