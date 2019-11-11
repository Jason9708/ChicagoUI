<template>
    <div>
        <!--遮罩层-->
        <div class='cai-popMask' v-if='visible'></div>
        <transition 
            name="cai-Drawer-fade"
            @after-enter="afterEnter"
            @after-leave="afterLeave">
            <div class='cai-Drawer-container' v-if='visible' :style='drawrWidth'>
                <div class='cai-Drawer-header'>
                    <slot name="title">
                        <span role="heading" class='title'>{{ title }}</span>
                    </slot>
                    <span @click="close" style='cursor:pointer'>X</span>
                </div>
                <div class='cai-Drawer-content'>
                    <slot name="content">
                        <span role="content" class='content'>{{ content }}</span>
                    </slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'CaiDrawer',
    data(){
        return{

        }
    },
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        title:{
            type:String,
            default:'我是标题'
        },
        content:{
            type:String,
            default:'我是内容'
        },
        width:{
            type:String,
            default:'300'
        }
    },
    computed:{
        drawrWidth(){
            const style = {}
            style.width = this.width + 'px'
            return style
        }
    },
    watch:{
        visible(){
            if(this.visible === true){
                document.body.style.overflow = 'hidden';
            }else{
                document.body.style.overflow = 'auto';
            }
        }
    },
    methods:{
        afterEnter:function(){
            this.$emit('opened');
        },
        afterLeave:function(){
            this.$emit('closed');
        },
        close:function(){
            this.$emit('update:visible',false)
            this.$emit('handleClose')
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';

.cai-popMask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index:998;

}
</style>