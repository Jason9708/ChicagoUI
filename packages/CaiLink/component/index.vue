<template>
    <a class='cai-Link' :href='href' :class="[ Type,Underline ]">
        <i :class='icon' v-if='icon'></i>
        <slot></slot>
    </a>
</template>

<script>
export default {
    name:'CaiLink',
    props:{
        href:{
            type:String,
            default:''
        },
        type: {
            type: String,
            default: ''
        },
        underline:{
            type:Boolean,
            default:false,

        },
        icon:{
            type: String,
            default: ''
        }
    },
    computed:{
        Type:function(){
            if(this.type){
                if(this.type === 'primary'){
                    return 'cai-Link-primary'
                }else if(this.type === 'success'){
                    return 'cai-Link-success'
                }else if(this.type === 'danger'){
                    return 'cai-Link-danger'
                }else{
                    return ''
                }
            }
            return ''
        },
        Underline:function(){
            if(this.underline){
                if(this.underline === true){
                    return 'cai-Link-underline'
                }else{
                    return false
                }
            }
            return false
        },
        
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>