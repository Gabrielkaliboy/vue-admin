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
      type: String,
      default: 'apple'
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
