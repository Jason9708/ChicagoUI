<template>
    <div>
        <!--带边框背景-->
        <button class='cai-Button' v-if='!isPlain' :class="[ Type, Size,Shape ]"  @click='handleClike' :disabled='disabled'>
            <i :class='icon' v-if='icon'></i>
            <slot></slot>
        </button>
        <!--纯文字-->
        <button class='cai-Button-plain' v-if='isPlain' :class="[ Type ]"  @click='handleClike' :disabled='disabled'>
            <i :class='icon' v-if='icon'></i>
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name:'CaiButton',
    props:{
        type:{}, // primary | success | error
        size:{}, // normal | small | large
        disabled:{ // 默认为false
            type:Boolean,
            default:false
        },
        shape:{}, // 形状 round | circle | simple
        icon: {
            type: String,
            default: ''
        },
        plain:{
            type:Boolean,
            default:false
        }

    },
    data(){
        return{
        }
    },
    computed:{
        Type:function(){
            if(this.type){
                if(this.type === 'primary'){
                    return this.plain ? 'cai-Button-plain-primary' : 'cai-Button-primary'
                }else if(this.type === 'success'){
                    return this.plain ? 'cai-Button-plain-success' : 'cai-Button-success'
                }else if(this.type === 'error'){
                    return this.plain ? 'cai-Button-plain-error' : 'cai-Button-error'
                }else{
                    return ''
                }
            }
            return ''
        },
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
        Size:function(){
            if(this.size){
                if(this.size === 'small'){
                    return this.plain ? '' :'cai-Button-small'
                }else if(this.size === 'large'){
                    return this.plain ? '' : 'cai-Button-large'
                }else{
                    return ''
                }
            }
            return ''
        },
        Shape:function(){
            if(this.shape){
                if(this.shape === 'round'){
                    return this.plain ? '' : 'cai-Button-round'
                }else if(this.shape === 'circle'){
                    return this.plain ? '' : 'cai-Button-circle'
                }else if(this.shape === 'simple'){
                    return this.plain ? '' : 'cai-Button-simple'
                }else{
                    return ''
                }
            }
            return ''
        },
        isPlain:function(){
            if(this.plain){
                if(this.plain === true){
                    return true
                }else{
                    return false
                }
            }
            return false
        }
    },
    methods:{
        handleClike:function(){
            this.$emit('click')
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
@import '../../CaiIcon/component/index.less';

</style>