/**
 * 暴露组件
 */
import CaiKeyboard from './component/index.vue'

// 定义install方法
CaiKeyboard.install = Vue => {
    // 定义组件
    Vue.component(CaiKeyboard.name, CaiKeyboard)
}

export default CaiKeyboard