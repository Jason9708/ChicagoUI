<template>
    <div style='width:100%;'>
        <div class='cai-Divider cai-Divider-horizontal' v-if='!showVertical'>
            <div class='cai-Divider-content' :class='[ ContentPosition ]'>
                <slot></slot>
            </div>
        </div>
        <div class='cai-Divider cai-Divider-vertical' v-if='showVertical'>
        </div>
    </div>
</template>

<script>
export default {
    name:'CaiDivider',
    data(){
        return{
            showVertical:false,     
        }
    },
    props:{
        contentPosition:{  // left | right | center
            type:String,
            default:''
        },
        direction:{ // horizontal | vertical
            type:String,
            default:''
        }
    },
    mounted(){
        if(this.direction === 'vertical'){
            this.showVertical = true
        }else{
            this.showVertical = false
        }
    },
    computed:{
        ContentPosition:function(){
            if(this.contentPosition === 'left'){
                return 'cai-Divider-content-left'
            }else if(this.contentPosition === 'right'){
                return 'cai-Divider-content-right'
            }else{
                return 'cai-Divider-content-center'
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>