<template>
  <div style='display:flex;flex-direction:column;align-items:center;padding:20px;'>
    <div ref='box'></div>
    <!-- Drawer -->
    <cai-drawer title='Hello,Drawer' content='Hello' width='400' :visible.sync='visibleDrawer'>
      <div slot='content' style='display:flex;justify-content:center;width:100%;'>
        I am Content
      </div>
    </cai-drawer>

    <cai-divider>Button</cai-divider>

    <div style='width:500px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
      <cai-button @click='handleClick'>默认按钮</cai-button>
      <cai-button type='primary' size='small' @click='handleClick2'>主要按钮</cai-button>
      <cai-button type='success' size='large' @click='handleClick1'>成功按钮</cai-button>
      <cai-button type='error' @click='handleClick3'>错误按钮</cai-button>
      <cai-button  shape='round' disabled>圆角禁用按钮</cai-button>
      <cai-button  icon='cai-icon-laading' shape='circle' @click='openDrawer'></cai-button>
      <cai-button type='primary' icon='cai-icon-laading' @click='openLoading' plain>朴素主要按钮</cai-button>
      <cai-button type='success'  plain>朴素成功按钮</cai-button>
      <cai-button type='error'  plain>朴素错误按钮</cai-button>
      <cai-button type='error'  plain disabled>朴素禁用按钮</cai-button>
    </div>

    <cai-divider>Icon</cai-divider>

    <div style='width:300px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
      <cai-icon name='up'></cai-icon>
      <cai-icon name='left'></cai-icon>
      <cai-icon name='down'></cai-icon>
      <cai-icon name='right'></cai-icon>
      <cai-icon name='add'></cai-icon>
      <cai-icon name='close'></cai-icon>
      <cai-icon name='night'></cai-icon>
      <cai-icon name='sun'></cai-icon>
      <cai-icon name='search'></cai-icon>
      <cai-icon name='warning'></cai-icon>
      <cai-icon name='refresh'></cai-icon>
      <cai-icon name='smile'></cai-icon>
      <cai-icon name='scan'></cai-icon>
      <cai-icon name='return'></cai-icon>
      <cai-icon name='loading'></cai-icon>
      <cai-icon name='pic'></cai-icon>
      <cai-icon name='namecard'></cai-icon>
      <cai-icon name='favorites'></cai-icon>
      <cai-icon name='email'></cai-icon>
      <cai-icon name='editor'></cai-icon>
      <cai-icon name='account'></cai-icon>
      <cai-icon name='good'></cai-icon>
      <cai-icon name='ellipsis'></cai-icon>
      <cai-icon name='download'></cai-icon>
      <cai-icon name='connections'></cai-icon>
      <cai-icon name='bad'></cai-icon>
      <cai-icon name='close'></cai-icon>
      <cai-icon name='ashbin'></cai-icon>
      <cai-icon name='clock'></cai-icon>
      <cai-icon name='camera'></cai-icon>
      <cai-icon name='add-account'></cai-icon>
    </div>

    <cai-divider>Link</cai-divider>

    <div style='width:300px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
      <cai-link>默认链接</cai-link>
      <cai-link type='primary'>主要链接</cai-link>
      <cai-link type='success'>成功链接</cai-link>
      <cai-link type='danger'>危险链接</cai-link>
      <cai-link href='http://www.baidu.com' underline>百度链接</cai-link>
    </div>

    <cai-divider>Alert</cai-divider>

    <div style='width:300px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
      <cai-alert title='默认提示文案'></cai-alert>
      <cai-alert title='默认提示文案' type='success'></cai-alert>
      <cai-alert title='默认提示文案' type='warning'></cai-alert>
      <cai-alert title='默认提示文案' type='error'></cai-alert>
      <cai-alert name='smile-fill' title='带图标默认提示文案'></cai-alert>
      <cai-alert name='success-fill' title='带图标成功提示文案' type='success' @handleClose='handleClose'></cai-alert>
      <cai-alert name='warning-fill' title='带图标危险提示文案' type='warning'></cai-alert>
      <cai-alert name='cry-fill' title='带图标错误提示文案' type='error'></cai-alert>
    </div>

    <cai-divider>Radio</cai-divider>

    <div style='width:310px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
        <cai-radio :options="testArray" :selectOption="testselect" @radioChange="setRadioValue"></cai-radio>
    </div>

    <cai-divider>Checkbox</cai-divider>

    <div style='width:310px;padding:20px;border:1px solid #DDDDDD;display:flex;flex-wrap:wrap;'>
        <cai-checkbox title="多选框列表标题"
               v-model="value"
               @getData="getInfo"
               :options="options"></cai-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo01',
  data(){
    return{
      // radio
      testArray:[{
          name:"简体中文",
          value:1
      },{
          name:"繁體中文",
          value:2
      },{
          name:"English",
          value:3
      }],
      testselect:1,

      // checkbox
      options: [
        {
          label:'first option',
          value:1,
          checked: true,
          disabled:true
        },
        {
          label:'second option',
          value:2
        },
        {
          label:'third option',
          value:3
        }
      ],
      value: '',

      // Drawer
      visibleDrawer:false
    }
  },
  props: {
    msg: String
  },
  methods:{
    openDrawer:function(){
      this.visibleDrawer = true
    },
    openLoading:function(){
      this.$caiLoading.show({
        text:'Loading',
        el:this.$refs.box
      })
      setTimeout(() => {
        this.$caiLoading.hide()
      },3000)
    },
    handleClick:function(){
      this.$message({
        content:'消息提示······',
        icon:'cai-icon-smile-fill'
      })
      console.log('点击了按钮.....')
    },
    handleClick1:function(){
      this.$message({
        content:'消息提示······',
        icon:'cai-icon-success-fill',
        type:'success'
      })
      console.log('点击了按钮.....')
    },
    handleClick2:function(){
      this.$message({
        content:'消息提示······',
        icon:'cai-icon-warning-fill',
        type:'warning'
      })
      console.log('点击了按钮.....')
    },
    handleClick3:function(){
      this.$message({
        content:'消息提示······',
        icon:'cai-icon-reeor-fill',
        type:'error'
      })
      console.log('点击了按钮.....')
    },
    handleClose:function(){
      console.log('我被关闭了')
    },
    setRadioValue:function (value) {
      console.log("setRadioValue",value)
    },
    getInfo:function(arr){
      this.value = arr;
      console.log(arr)
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .cai-Button{
  margin:5px;
}
/deep/ .cai-Link{
  margin:5px;
}
/deep/ .cai-Alert-box{
    margin-bottom:10px;
}

</style>
