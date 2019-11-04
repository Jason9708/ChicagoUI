/**
 * 暴露组件
 */
import CaiButton from './component/index.vue'

// 定义install方法
CaiButton.install = Vue => {
    // 定义组件
    Vue.component(CaiButton.name,CaiButton)
}

export default CaiButton