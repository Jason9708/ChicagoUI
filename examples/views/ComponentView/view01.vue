<template>
  <div>
    <cai-button :label='label' @click='handleClick'></cai-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      label:'hhh'
    }
  },
  props: {
    msg: String
  },
  methods:{
    handleClick:function(){
      console.log('hhh')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
