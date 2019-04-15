<template>
    <div class="email">
        <button @click="handleClick">点我</button>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$bus.$emit('on-click','hello')
        }
    },
    mounted(){
        console.log(this.$bus);
    }
}
</script>
<style>
    .email{
        border:1px solid rgb(247, 121, 247);
    }
</style>

