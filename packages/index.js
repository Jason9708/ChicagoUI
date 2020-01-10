/**
 * 处理所有组件全局install
 */
import CaiButton from './CaiButton'
import CaiIcon from './CaiIcon'
import CaiLink from './CaiLink'
import CaiAlert from './CaiAlert'
import message from './CaiMessage'
import CaiRadio from './CaiRadio'
import CaiCheckbox from './CaiCheckbox'
import CaiDivider from './CaiDivider'
import CaiDrawer from './CaiDrawer'
import CaiLoading from './CaiLoading'
import CaiInput from './CaiInput'
import CaiKeyboard from './CaiKeyboard'
import CaiCalendar from './CaiCalendar'
import CaiTooltip from './CaiTooltip'

const components = [
    CaiButton,
    CaiIcon,
    CaiLink,
    CaiAlert,
    CaiRadio,
    CaiCheckbox,
    CaiDivider,
    CaiDrawer,
    CaiLoading,
    CaiCalendar,
    CaiInput,
    CaiKeyboard,
    CaiTooltip
]

// 定义install方法，接收一个vue参数
const install = (Vue) => {
    // 判断这个组件是不是安装了，如果安装过了就return
    if (install.installed) return
    install.installed = true

    // 遍历所有组件
    components.map(component => {
        Vue.use(component)
    })

    // 检测到Vue才会执行
    if (typeof window != 'undefined' && window.Vue) {
        install(window.Vue)
    }

    Vue.prototype.$message = message;
}

export default {
    install,
    // 所有的组件，都必须有install方法，才可以使用Vue.use()
    ...components
}