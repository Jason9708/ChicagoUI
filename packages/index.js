/**
 * 处理所有组件全局install
*/
import CaiButton from './CaiButton'

const components = [
    CaiButton
]

// 定义install方法，接收一个vue参数
const install = (Vue) => {
    // 判断这个组件是不是安装了，如果安装过了就return
    if(install.installed) return
    install.installed = true

    // 遍历所有组件
    components.map( component => {
        Vue.use(component)
    })

    // 检测到Vue才会执行
    if(typeof window != 'undefined' && window.Vue){
        install(window.Vue)
    }
}

export default{
    install,
    // 所有的组件，都必须有install方法，才可以使用Vue.use()
    ...components
}