/**
 * 暴露组件
 */
import CaiDivider from './component/index.vue'

// 定义install方法
CaiDivider.install = Vue => {
    // 定义组件
    Vue.component(CaiDivider.name, CaiDivider)
}

export default CaiDivider