<template>
    <div>
        <!-- <AInput v-model = "inputValue"></AInput> -->
        <!-- 相当于 -->
        <!-- <a-input :value='inputValue' @input = "handleInput"></a-input> -->
        <a-input @input = "handleInput"></a-input>
        <p>{{ inputValue }} </p>
        <a-show :content='inputValue'></a-show>
    </div>
</template>
<script> 
// import AInput from '../components/AInput'
import AInput from '@/components/AInput' 
//  <a-input></a-input>或者<AInput></AInput>
// import AInput from '_c/AInput' 不知道这个路由为什么匹配不上

import AShow from '@/components/AShow'
export default {
    name:'store',
    data(){
        return{
            inputValue:''
        }
    },
    components:{
        AInput:AInput,
        AShow,
    },
    //不用v-model方法就要自己写了
    // methods:{
    //     handleInput(val){
    //         this.inputValue = val
    //     }
    // }
    methods:{
        handleInput(val){
            this.inputValue = val
        }
    }
}
</script>