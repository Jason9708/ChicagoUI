import CaiLoading from './component/index.vue'
import Vue from 'vue'

let instance

const LoadingConstructor = Vue.extend(CaiLoading)


// 让 instance 指向CaiLoading组件
instance = new LoadingConstructor({
    el: document.createElement("div") // 传入一个为div元素的el属性
})

instance.showloading = false // 初始化组件中的showloading

const caiLoading = {
    // 显示
    show(options) {
        instance.showloading = true // 显示组件
            // 调起组件时若有传参数
        if (options) {
            options.el.appendChild(instance.$el)
            instance.text = options.text
        }
        document.body.style.overflow = 'hidden';
    },
    // 隐藏
    hide() {
        instance.showloading = false
        document.body.style.overflow = 'auto';
    }
}

export default {
    install() {
        if (!Vue.$caiLoading) {
            Vue.$caiLoading = caiLoading
        }
        Vue.mixin({
            created() {
                this.$caiLoading = Vue.$caiLoading
            }
        })
    }
}