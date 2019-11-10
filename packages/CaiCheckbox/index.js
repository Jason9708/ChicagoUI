/**
 * 暴露组件
 */
import CaiCheckbox from './component/index.vue'

// 定义install方法
CaiCheckbox.install = Vue => {
    // 定义组件
    Vue.component(CaiCheckbox.name, CaiCheckbox)
}

export default CaiCheckbox