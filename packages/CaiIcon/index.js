/**
 * 暴露Icon组件
 */
import CaiIcon from './component/index.vue'

// 定义install方法
CaiIcon.install = Vue => {
    // 定义组件
    Vue.component(CaiIcon.name, CaiIcon)
}

export default CaiIcon