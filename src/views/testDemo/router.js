const mainRouter = [
  {
    name: 'lifeCycle',
    path: '/test/lifeCycle',
    component: function (resolve) {
      require(['./lifeCycle.vue'], resolve)
    }
  }
]

export default mainRouter
