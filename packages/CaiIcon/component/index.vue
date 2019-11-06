<template>
    <i :class="'cai-icon-' + name"></i>
</template>

<script>
export default {
    name:'CaiIcon',
    props: {
      name: String
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>