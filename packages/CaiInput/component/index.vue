<template>
    <div class='cai-input' :class='[ Disabled, Round, Size,Round]'>
        <input class='cai-input-inner' :value='value' :disabled='disabled' :minlength='minlength' :maxlength='maxlength' :placeholder='placeholder' @input="$emit('input', $event.target.value)" />
        <i :class='icon' v-if='icon'></i>
    </div>
</template>

<script>
export default {
    name:'CaiInput',
    data(){
        return{}
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
        size:{  // 输入框大小 mini | small
            type:String,
            default:'normal'
        },
        minlength:{
            type:String,
            default:'0'
        },
        maxlength:{  // 最大长度 默认40
            type:String,
            default:'40'
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
                    return 'cai-input-disabled'
                }else{
                    return ''
                }
            }
            return ''
        },
        Round:function(){
            if(this.round){
                return 'cai-input-round'
            }
            return ''
        },
        Size:function(){
            if(this.size){
                if(this.size === 'mini'){
                    return 'cai-input-mini'
                }else if(this.size === 'small'){
                    return 'cai-input-small'
                }else{
                    return ''
                }
            }
            return ''
        },
    }
}
</script>

<style lang='less' scoped>
@import './index.less';
@import '../../CaiIcon/component/index.less';
</style>