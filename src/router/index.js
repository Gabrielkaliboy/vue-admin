import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes
})

// 写setTitle函数

// 多一个登陆接口，实际中是要用接口来实现的,这个属性来判断是否登陆
// 尝试修改属性为true试试
const HAS_LOGINED = true

// 方法beforeEach是跳转之前对应的逻辑
router.beforeEach((to, from, next) => {
  // 获取路由源信息,并设置当前页面标题
  to.meta && setTitle(to.meta.title)
  // to:要跳转的页面；from:当前要离开的路由对象；next:一个函数，你要确定要做
  // 跳转，会用到这个next函数
  // 如果当前的页面不是登陆页面
  if (to.name !== 'login') {
    // 如果已经登陆了
    if (HAS_LOGINED) {
      // 直接往下跳转，应该到哪个页面就到哪个
      next()
    } else {
      // 如果没有登陆，就跳转到登录页
      next({
        // 这里放的对象可以和push哪个是一样的
        name: 'login'
      })
    }
    // 如果是登录页
  } else {
    // 且已经登陆了，就跳转到Home页面
    if (HAS_LOGINED) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  }
})
// export default new Router({
//   // mode默认模式，默认为hash形式为http://localhost:8080/#/?food=banana
//   // 这里有#

//   // 除了hash，还可以是html5中的hsitory模式，这个 模式需要后端的配合,url里面
//   // 是没有#号的，记得这个模式如果匹配不到资源，需要跳转到一个默认的页面
//   mode: 'history',
//   routes: routes
// })
// router.beforeResolve(() => {
// // 也是一个全局的守卫，区别是在导航被确认之前（所有的导航钩子都结束），所有组建内守卫
// // 和异步组建路由被解析之后被调用
// // 参数和beforeEach一样
// })
// 与beforeEach之对应的，还有一个跳转之后做一些操作
router.afterEach((to, from) => {
  // 这里面没有参数next
  // logining = false
})

/*
 完整的导航解析流程
 1.导航被触发
 2.在失活的组建（即将离开的页面组建）里调用离开守卫beforeRouteLeave
 3.调用全局的前置守卫 beforeEach
 4.在重用的组建里调用beforeRouteUpdate
 5.调用路由独享守卫 beforeEnter
 6.调用异步路由组建
 7.在被激活的组建（即将进入的页面组建）里调用beforeRouteEnter
 8.调用全局的解析守卫 beforeResolve  导航确认之前，异步路由组建解析之后d调用
 9. 导航确认
 10. 调用全局的后置守卫 afterEach
 11. 触发DOM渲染更新
 12. 用创建号的实例调用beforeRouterEnter守卫里传给next的回调函数
*/

export default router
