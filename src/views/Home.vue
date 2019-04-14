<template>
  <div class="home">
    <!-- 
      编程式导航
     -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换</button>
    <div>{{ food }}</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    food: {
      //http://localhost:8080/#/?food=banana 有这个参数就是banana没有就是默认
      type: String,
      default: 'apple'
    }
  },
  // 组建内的守卫,渲染组建路由，在确认之前调用
  beforeRouteEnter (to, from, next) {
    // to:当前路由的对像，from：上一个路由对象
    console.log(to.name)
    console.log(from.name)
    // 注意，由于组建还没有被渲染，所以这里的this是获取不到的，如果
    // 想用，就用下面这个方法
    // next(
    //   // vm就是路由实例
    //   vm => {
    //     console.log(vm);
    //   }
    // )
    // 这个函数调用问了以后一定要调用next函数，否则页面不会变化
    next()

  },
  // 一个面用到了用户编辑，编辑没有提交，这时候用户离开就用到了这个方法
  // 提示他“编辑还没有完成，是否要离开"
  beforeRouteEnter(to,from,next){
    const leave = confirm('您确认要离开吗？')
    if( leave ){
      // 如果点了确认，就做路由跳转
      next()
    }else{
      // 没有就不跳转
      next(false)
    }
  },
  methods: {
    handleClick:function(type){
      //-1是后退一页，1是前进一页 
      // this.$router.go(-1)
      // 后退还可以使用back方法
      // this.$router.back();
      if(type === 'back'){
        this.$router.back();
      }else if(type==='push'){
        // this.$router.push('/parent')
        // 我们还可以使用name的方式
        //页面带参第二种写法
        const name ='lison';
        this.$router.push({
          //页面带参，最后的url为http://localhost:8080/#/argu/lison
          // name: 'argu',
          // params:{
          //   name:'lison'
          // }
          //页面带参第二种写法，最后的url为http://localhost:8080/#/argu/lison
          //注意：path就要这么写，而上面那种，name要和params一起
          path:`/argu/${name}`
          //加入参数，就是？后面
          // query:{
          //   name:'lison'
          // }
        })
      }else if(type === "replace"){
        // push与replace的区别是：push是向浏览记录里面加入一条记录，回退的时候可以回退回去
        // replace是代替当前浏览的历史，之后在做回退操作的时候会
        // 回退到parent
        this.$router.replace({
          name:'home'
        })
      }
    }
  }
}
</script>
