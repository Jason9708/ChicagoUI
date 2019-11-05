<template>
  <div style='display:flex;'>
    <cai-button @click='handleClick'></cai-button>
    <cai-button type='primary' size='small' @click='handleClick'></cai-button>
    <cai-button type='success' size='large' @click='handleClick'></cai-button>
    <cai-button type='error' @click='handleClick'></cai-button>
    <cai-button @click='handleClick' shape='round' disabled></cai-button>
    <cai-button @click='handleClick' shape='circle'></cai-button>
    <cai-button type='primary' @click='handleClick' plain></cai-button>
    <cai-button type='success' @click='handleClick' plain></cai-button>
    <cai-button type='error' @click='handleClick' plain></cai-button>
    <cai-button type='error' @click='handleClick' plain disabled></cai-button>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
