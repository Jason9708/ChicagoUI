<template>
    <div class='cai-tooltip' ref='caiTooltip' id='cai-tooltip'>
        <!-- 提示框 -->
        <transition name='tooltip'>
            <div class='cai-tooltip-tips' id='cai-tooltip-tips' v-if='showTips'> 
                <slot name='tips'></slot>
            </div>
        </transition>
        <!-- 内容 -->
        <slot name='content'></slot>
    </div>
</template>

<script>
export default {
    name:'CaiTooltip',
    data(){
        return{
            showTips:false, // 控制提示框显示与否
        }
    },
    mounted(){
        var that = this
        var dom = document.getElementById('cai-tooltip')
        dom.onmouseover = function(){
            that.showTips = true
            that.$nextTick( () => {
                document.getElementById('cai-tooltip-tips').style.bottom = dom.offsetHeight + 10 + 'px'  
            })
        }
        dom.onmouseout = function(){
            that.showTips = false
        }
    },
    methods:{
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>