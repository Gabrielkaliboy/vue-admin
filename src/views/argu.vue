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
     }
}
</script>
