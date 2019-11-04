<template>
    <button class='cai-Button' @click='handleClike'>{{label}}
    </button>
</template>

<script>
export default {
    name:'CaiButton',
    props:{
        label:{
            default:'按钮'
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
    
</style>