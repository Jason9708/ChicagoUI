/**
 * 暴露Icon组件
 */
import CaiDrawer from './component/index.vue'

// 定义install方法
CaiDrawer.install = Vue => {
    // 定义组件
    Vue.component(CaiDrawer.name, CaiDrawer)
}

export default CaiDrawer