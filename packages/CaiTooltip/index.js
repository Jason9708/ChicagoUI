/**
 * 暴露组件
 */
import CaiTooltip from './component/index.vue'

// 定义install方法
CaiTooltip.install = Vue => {
    // 定义组件
    Vue.component(CaiTooltip.name, CaiTooltip)
}

export default CaiTooltip