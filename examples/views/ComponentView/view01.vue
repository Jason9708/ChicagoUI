<template>
  <div style='display:flex;'>
    <cai-button @click='handleClick'></cai-button>
    <cai-button ref='countDown' type='primary' size='small' @click='handleClick'></cai-button>
    <cai-button type='success' size='large' @click='handleClick'></cai-button>
    <cai-button type='error' @click='handleClick' disabled='true'></cai-button>
    <cai-button @click='handleClick' shape='round'></cai-button>
    <cai-button @click='handleClick' shape='circle'></cai-button>
  </div>
</template>

<script>
export default {
  name: 'demo01',
  data(){
    return{
      
    }
  },
  props: {
    msg: String
  },
  methods:{
    handleClick:function(){
      console.log('点击了按钮.....')
      this.$refs.countDown.showCountDown()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
