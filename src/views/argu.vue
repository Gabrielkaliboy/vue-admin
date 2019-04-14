<template>
    <div>
        <!-- 
            $route 代表的是当前路由的加载对象
            params:是一个参数，他是一个对像，里面有一个name值,这样写就不用在props里卖弄定义了
            {{ $route.params.name }}
         -->

        <!--
            这么写得在props里面定义
            {{name}}
        -->
        {{ name }}
    </div>
</template>
<script>
export default {
     props:{
         name: {
             type:String,
             default: "lison"
         }
     },
     beforeRouteUpdate(to, from, next){
         // 值由url发生变化，这个组建是一个复用组建的时候才会发生调用
         console.log(to.name,from.name)
         // 组件已经渲染完了，可以调用this
     }
}
</script>
