/**
 * 暴露组件
 */
import CaiRadio from './component/index.vue'

// 定义install方法
CaiRadio.install = Vue => {
    // 定义组件
    Vue.component(CaiRadio.name, CaiRadio)
}

export default CaiRadio