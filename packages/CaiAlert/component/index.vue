<template>
    <div v-if='showAlert' class='cai-Alert-box' :class="[ Type ]" >
        <div class='cai-Alert-left'>
            <i class='cai-Alert-icon' :class="'cai-icon-' + name"></i>
            {{title}}
        </div>
        <div class='cai-Alert-right' @click='handleClose'>
            <i class='cai-Alert-icon cai-icon-close'></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'CaiAlert',
    data(){
        return{
            showAlert:true
        }
    },
    props:{
        type:{
            type:String,
            default:''
        },    // primary | success | error
        title:{
            type:String,
            default:''
        },
        name:{
            type:String
        }
    },
    computed:{
        Type:function(){
            if(this.type){
                if(this.type === 'success') return 'cai-Alert-success'
                if(this.type === 'warning') return 'cai-Alert-warning'
                if(this.type === 'error') return 'cai-Alert-error'
                return ''
            }else{
                return ''
            }
        }
    },
    methods:{
        handleClose:function(){
            this.showAlert = false
            this.$emit('handleClose')
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
@import '../../CaiIcon/component/index.less';

</style>

