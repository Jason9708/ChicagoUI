<template>
    <div style='display:flex;flex-direction:column;align-items:center;padding:20px;'>
        <cai-divider>Cai-KeyBoard</cai-divider>
        <textarea v-model='inputText' style='width:500px;margin:20px;'></textarea>
        <cai-keyboard @getText="getText" @getKey='getKeys'></cai-keyboard>
    </div>
</template>

<script>
export default {
    name:'keyBoardDemo',
    data(){
        return{
            inputText:''
        }
    },
    methods:{
        getKeys(key){
            console.log(key)
        },
        getText(text){
            this.inputText = text
        }
    }
}
</script>

<style lang="less" scoped>

</style>