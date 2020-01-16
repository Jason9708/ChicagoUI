/**
 * 暴露组件
 */
import CaiDialog from './component/index.vue'

// 定义install方法
CaiDialog.install = Vue => {
    // 定义组件
    Vue.component(CaiDialog.name, CaiDialog)
}

export default CaiDialog