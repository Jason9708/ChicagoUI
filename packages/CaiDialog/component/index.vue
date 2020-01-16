<template>
    <div class='cai-dialog-wrapper' ref='dialog-wrapper' v-show='visibleDialog' @click.self='handleWrapperClick'>
        <transition name="dialog-fade">
            <div ref='dialog'
                 :class="['cai-dialog',{ 'cai-dialog-dark':dark },customClass]"
                 :style='dialogSize'
                  v-if='dialogRender'
            >   
                <!-- 对话框头部 -->
                <div class='cai-dialog-header'>
                    <!-- 对话框标题，可被替换 -->
                    <slot name='title'>
                        <span class='cai-dialog__title'>{{ title }}</span>
                    </slot>
                    <!-- 关闭对话框按钮 -->
                    <button
                        type='button'
                        class='cai-dialog__headerbtn'
                        aria-label='Close'
                        v-if='displayClose'
                        @click='handleClose'>
                        <i class='cai-icon-close'></i>
                    </button>
                </div>
                <!-- 对话框主体 -->
                <div class='cai-dialog-body'>
                    <slot></slot>
                </div>
                <!-- 对话框底部 -->
                <div class='cai-dialog-footer' v-if='$slots.footer'>
                    <slot name='footer'></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'CaiDialog',
    data(){
        return{
            visibleDialog:false,
            dialogRender:false,
            dialogSize:{}   // body宽高用于设置居中
        }
    },
    props:{
        visible:{
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: ''
        },
        // 关闭弹窗前的回调（接收一个参数 done()）
        beforeClose: Function,
        // 是否需要遮罩层
        modal:{
            type: Boolean,
            default: true
        },
        // 是否在 Dialog 出现时将 body 滚动锁定
        lockScroll: {
            type: Boolean,
            default: true
        },
        // 是否可以通过点击 modal 关闭 Dialog
        closeOnClickModal: {
            type: Boolean,
            default: false
        },
        // 是否显示右上角关闭按钮
        displayClose:{
            type: Boolean,
            default: true
        },
        // 最大宽高
        width: String,
        height: String,
        // 主题颜色 - 高亮（默认） | 夜间
        dark:{
            type:Boolean,
            default:false
        },
        // 自定义类
        customClass: {
            type:String,
            default:''
        }
    },
    computed:{},
    watch:{
        visible(newVal){
            if(newVal){
                this.visibleDialog = true
                this.dialogRender = true

                // 依据props修改样式
                this.changeDialogStyle()

                this.$emit('open')
            }else{
                this.visibleDialog = false
                this.dialogRender = false
                document.body.style['overflow'] = 'auto'
                this.$emit('close')
            }
        }
    },
    mounted(){
        
    },
    methods:{
        handleWrapperClick(){
            if(!this.closeOnClickModal) return
            this.handleClose()
        },
        // 处理关闭对话框，若存在beforeClose则调用
        handleClose(){
            if(typeof this.beforeClose === 'function') {
                this.beforeClose(this.hide)
            }else{
                this.hide()
            }
        },
        hide(){
            this.$emit('update:visible', false);
        },
        // 根据Props值修改Dialog样式
        changeDialogStyle(){
            // lockScroll - 阻止底层滚动
            if(this.lockScroll) document.body.style['overflow'] = 'hidden'
            var that = this
            this.$nextTick(() => {
                var dialogWrapperStyle = that.$refs['dialog-wrapper'].style
                var dialogStyle = that.$refs.dialog.style
                if(that.width) dialogStyle.width = that.width + 'px'
                if(that.height) dialogStyle.height = that.height + 'px'
                if(!that.modal) dialogWrapperStyle.background = 'transparent'
            })
        }
    }
}
</script>

<style lang='less' scoped>
@import './index.less';
@import '../../CaiIcon/component/index.less';
</style>