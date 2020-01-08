/**
 * 暴露组件
 */
import CaiCalendar from './component/index.vue'

// 定义install方法
CaiCalendar.install = Vue => {
    // 定义组件
    Vue.component(CaiCalendar.name, CaiCalendar)
}

export default CaiCalendar