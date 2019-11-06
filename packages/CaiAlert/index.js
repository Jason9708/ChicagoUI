/**
 * 暴露组件
 */
import CaiAlert from './component/index.vue'

// 定义install方法
CaiAlert.install = Vue => {
    // 定义组件
    Vue.component(CaiAlert.name, CaiAlert)
}

export default CaiAlert