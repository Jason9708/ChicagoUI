<template>
    <div class='cai-Radio-box'>
        <div v-for="(option,index) in options" :key='index' class='cai-Radio-item' :class="{ 'checked' : selectRadio == option.value}">
            <label class="cai-Radio" :class="{ 'checked' : selectRadio == option.value}">
                <input type="radio" v-model="radioModel" :value="option.value" @change="radioChange($event,option)" />
            </label>
            {{ option.name }}
        </div>
    </div>
</template>

<script>
export default {
    name:'CaiRadio',
    data(){
        return{
            radioModel:'',
            selectRadio:''
        }
    },
    props:{
        options: {
            type: [Array, Object]
        },
        selectOption:{}
    },
    mounted() {
        this.selectRadio = this.selectOption;

    },
    methods:{
        radioChange:function ($event,option) {
            this.selectRadio = $event.target.value
            this.$emit('radioChange',$event.target.value);
        }
    }   
}
</script>

<style lang='less' scoped>
@import './index.less';
</style>