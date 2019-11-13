<template>
    <div class='cai-loading' v-if='showloading'>
        <!--遮罩层-->
        <div class='cai-loading-mask'></div>
        <div class='cai-loading-content'>
            <div class='cai-loading-animate'></div>
            <div class='cai-loading-text'>{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CaiLoading',
    props:{
        showloading:Boolean,
        text:{
            type:String,
            default:'Loading...'
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>