<template>
  <transition name="trans-message" @after-leave="afterLeave" @after-enter="setHeight">
    <div
      v-show="visible"
      :class="['cai-Message',Type]"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <div class='cai-Message-left'>
          {{content}}
      </div>
      <div class='cai-Message-right'>
          <i :class='icon' v-if='icon'></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  props: {
    content: {
      type: String,
      default: ''
    },
    icon:{
        type: String,
        default: ''
    },
    type:{
        type:String,
        default:''
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    Type:function(){
            if(this.type){
                if(this.type === 'success') return 'cai-Message-success'
                if(this.type === 'warning') return 'cai-Message-warning'
                if(this.type === 'error') return 'cai-Message-error'
                return ''
            }else{
                return ''
            }
        }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.doClose()
    },
    doClose () {
      this.visible = false
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    clearTimer () {},
    createTimer () {},
    setHeight () {}
  }
}
</script>

<style lang="less" scoped>
@import '../../CaiIcon/component/index.less';

// 普通样式
.cai-Message{
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-size:12px;
    letter-spacing:1px;
    background: #fff;
    color :#606266;
    border:1px solid #DCDFE6;
    border-left:5px solid #2f3640; 
    border-radius:0px 5px 5px 0px;
    padding: 5px 10px;
    min-width: 240px;
    max-width:500px;
    box-shadow:3px 3px 5px #E4E7ED;
    flex-wrap:wrap;
    opacity:0.7;
    position: fixed;
    left: 20px;
    top: 20px;
}
.cai-Message-right{
    font-size:20px;
    width:20px;
}
.cai-Message-left{
    margin-right:10px;
    flex:1;
}
// success样式
.cai-Message-success{
    background: #66EE66;
    border:1px solid #66EE66;
    border-left:5px solid #27ae60;
    box-shadow:3px 3px 5px #AEE7A0;
    color:#303133;
}
// warning样式
.cai-Message-warning{
    background: #F9CDB0;
    border:1px solid #F9CDB0;
    border-left:5px solid #e74c3c;
    box-shadow:3px 3px 5px #FDE3BD;
    color:#303133;
}
// error
.cai-Message-error{
    background: #FBA28C;
    border:1px solid #FBA28C;
    border-left:5px solid #c0392b;
    box-shadow:3px 3px 5px #FACBC0;
    color:#303133;
}



//  动画
.trans-message-enter{
    opacity: 0;
    transform: translateX(-100%);
}
.trans-message-leave-to{
    opacity: 0;
    transform: translateX(-100%);
}
.trans-message-enter-active{
    transition:all .3s ease;
}
.trans-message-leave-active{
    transition:all .3s ease;
}
</style>
