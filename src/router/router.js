import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 设置别名
    alias: '/home_page',
    name: 'home',
    component: Home,
    // 函数模式
    props: route => ({
      // 函数返回的是一个对象,根据当前组建里面的food值来设置此处的food,查看home组建的food
      food: route.query.food
    }),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') {
      //   console.log('这是从about登录页面来的')
      // } else {
      //   console.log('这不是从about登陆页面来的')
      // }
      // 处理完了所有的逻辑以后，要调用next()函数，否则路由不起效果
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    // 有name值的叫做命名路由，这里的name就是router-link里面绑定的to
    path: '/about',
    name: 'about',
    props: {
      // 这里如果有值，会覆盖组建里面的apple
      food: 'banana'
    },
    // 懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由组件
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    // 将路由里面的props赋值这里
    props: true
  },
  {
    // 嵌套路由
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        // 这里的child不要加斜线，作为嵌套路由会自动补齐
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    // 多个路由的时候这里要加s
    components: {
      // 当有的router-view里没有name的时候，可以用default告诉
      // 他渲染哪个组建
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    // 重定向：将我们当前访问的url重新定向到另一个url
    path: '/main',
    // redirect: '/'这种写法或者是下面这种
    // redirect: {
    //   name: 'home'
    // }
    // 或者函数
    redirect: to => {
      console.log(to)
      // 我们这里可以做一些逻辑判断，或者直接返回一个对象
      return {
        // 直接简写
        name: '/'
      }
    }
  },
  {
    // 使用history模式的时候，适配一下如果没有匹配到路由，都跳转到error_404
    // 这个匹配一定要放到最后，路由匹配有一个优先级原则，如果放在前面了，会导致后面的
    // 不能全部都跳到了404
    path: '*',
    component: () => import('@/views/error_404')
  }

]
