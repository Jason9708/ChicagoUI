/**
 * 暴露组件
 */
import CaiInput from './component/index.vue'

// 定义install方法
CaiButton.install = Vue => {
    // 定义组件
    Vue.component(CaiInput.name, CaiInput)
}

export default CaiInput