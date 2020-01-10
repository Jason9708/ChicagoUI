<template>
    <div class='cai-tooltip' ref='caiTooltip' :id='tooltipId' @mouseover='onMouseover(tooltipId)' @mouseout='onMouseout(tooltipId)'>
        <!-- 提示框 -->
        <transition name='tooltip'>
            <div class='cai-tooltip-tips' :class="[ Theme ]" :id='tipId' v-if='showTips'> 
                <slot name='tips'></slot>
            </div>
        </transition>
        <!-- 内容 -->
        <slot name='content'></slot>
    </div>
</template>

<script>
import { generateId } from '../../utils/util.js'
export default {
    name:'CaiTooltip',
    props:{
        theme:{  // 主题 - 默认黑色 可选：light 其余值均默认
            type: String,
            default: ''
        }
    },
    data(){
        return{
            showTips:false, // 控制提示框显示与否
        }
    },
    computed: {
        tooltipId() {
            return `cai-tooltip-${generateId()}`
        },
        tipId() {
            return `cai-tooltip-tips-${generateId()}`
        },
        Theme() {
            if(this.theme){
                if(this.theme === 'light'){
                    return 'cai-tooltip-tips-light'
                }else{
                    return ''
                }
            }
            return ''
        }
    },
    mounted(){
    },
    methods:{
        // 鼠标移入
        onMouseover(id){
            var that = this
            var dom = document.getElementById(id)
            this.showTips = true
            this.$nextTick( () => {
                document.getElementById(that.tipId).style.bottom = dom.offsetHeight + 10 + 'px'  
            })
            this.$emit('openTooltip')
        },
        onMouseout(id){
            this.showTips = false
            this.$emit('closeTooltip')
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>