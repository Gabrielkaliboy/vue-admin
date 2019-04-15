<template>
    <input @input='handleInput' :value="value">
</template>
<script>
export default {
    name: 'AInput',
    props: {
        value: {
            type:[String, Number],
            default:''
        }
    },
    methods: {
        handleInput(event){
            const value = event.target.value;
            // 子组件要想修改父组件的值要以参数的形式放在这里，以事件发出去
            // 父组件绑定一个事件来知道子组件要改一个值，改值的操作在子组建里修改
            this.$emit('input',value)
        }
    }
}
</script>
