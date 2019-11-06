/**
 * 暴露组件
 */
import CaiLink from './component/index.vue'

// 定义install方法
CaiLink.install = Vue => {
    // 定义组件
    Vue.component(CaiLink.name, CaiLink)
}

export default CaiLink