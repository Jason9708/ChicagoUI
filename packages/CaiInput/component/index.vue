<template>
    <div class='cai-input' :class='[ Disabled, Round, Size,Round]'>
        <input class='cai-input-inner' v-model='value' :disabled='Disabled' :minlength='minlength' :maxlength='maxlength' />
        <i :class='icon' v-if='icon'></i>
    </div>
</template>

<script>
export default {
    name:'CaiInput',
    data(){
    },
    props:{
        value:{
            default:''
        },
        disabled:{ // 默认为false
            type:Boolean,
            default:false
        },
        icon: {
            type: String,
            default: ''
        },
        round:{ // 是否带圆角
            type:Boolean,
            default:false
        },
        size:{  // 输入框大小 mini | small | normal 
            type:Boolean,
            default:'normal'
        },
        minlength:{
            type:Number,
            default:0
        },
        maxlength:{  // 最大长度 默认40
            type:Number,
            default:40
        },
        placeholder:{
            type:String,
            default:'请输入'
        }
    },
    computed:{
        Disabled:function(){
            if(this.disabled){
                if(this.disabled === true){
                    return true
                }else{
                    return false
                }
            }
            return false
        },
    }
}
</script>

<style>
@import './index.less';
@import '../../CaiIcon/component/index.less';
</style>