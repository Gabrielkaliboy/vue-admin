<template>
    <div>
        <AInput v-model = "inputValue"></AInput>
        {{ inputValue }}
    </div>
</template>
<script>
// import AInput from '../components/AInput'
import AInput from '@/components/AInput' 
//  <a-input></a-input>或者<AInput></AInput>
// import AInput from '_c/AInput' 不知道这个路由为什么匹配不上
export default {
    name:'store',
    data(){
        return{
            inputValue:''
        }
    },
    components:{
        AInput:AInput
    }
}
</script>