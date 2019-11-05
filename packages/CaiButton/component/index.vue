<template>
    <button class='cai-Button' :class="[ Type, Size,Shape ]"  @click='handleClike' :disabled='Disabled'>{{countDownLabel ? countDownLabel : label}}
    </button>
</template>

<script>
export default {
    name:'CaiButton',
    props:{
        label:{
            default:'BUTTON'
        },
        type:{}, // primary | success | error
        size:{}, // normal | small | large
        disabled:{ // 默认为false
            default:false
        },
        shape:{}, // 形状 round | circle

    },
    data(){
        return{
            countDown:false,
            countDownLabel:false,
        }
    },
    computed:{
        Type:function(){
            if(this.type){
                if(this.type === 'primary'){
                    return 'cai-Button-primary'
                }else if(this.type === 'success'){
                    return 'cai-Button-success'
                }else if(this.type === 'error'){
                    return 'cai-Button-error'
                }else{
                    return ''
                }
            }
            return ''
        },
        Size:function(){
            if(this.size){
                if(this.size === 'small'){
                    return 'cai-Button-small'
                }else if(this.size === 'large'){
                    return 'cai-Button-large'
                }else{
                    return ''
                }
            }
            return ''
        },
        Disabled:function(){
            return this.disabled || this.countDown ? true : false
        },
        Shape:function(){
            if(this.shape){
                if(this.shape === 'round'){
                    return 'cai-Button-round'
                }else if(this.shape === 'circle'){
                    return 'cai-Button-circle'
                }else{
                    return ''
                }
            }
            return ''
        }
    },
    methods:{
        handleClike:function(){
            this.$emit('click')
        },
        // 实现倒计时不可操作
        showCountDown:function(){
            this.countDown = true
            this.countDownLabel = 5
            var Interval = setInterval(()=>{
                this.countDownLabel--
                if(this.countDownLabel <= 0){
                    clearInterval(Interval)
                    this.countDown = false
                    this.countDownLabel = false

                }
            },1000)
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';

</style>