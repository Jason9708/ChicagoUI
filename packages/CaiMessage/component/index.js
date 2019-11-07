import Vue from 'vue'
import messageComponent from './fun-caimessage'
const messageConstructor = Vue.extend(messageComponent)

const instances = []
let seed = 1

const removeInstance = (instance) => {
    const len = instances.length
    if (!instance) return
    const index = instances.findIndex(inst => instance.id === inst.id)

    instances.splice(index, 1)

    if (len <= 1) return
    const removedHeight = instance.vm.height
    for (let i = index; i < len - 1; i++) {
        instances[i].verticalOffset =
            parseInt(instances[i].verticalOffset) - removedHeight - 16
    }
}

const notify = function(options) {
    const {
        onClose,
        ...rest
    } = options
    if (Vue.prototype.$isServer) return
    options = options || {}
    const id = `messsage_${seed++}`

    const instance = new messageConstructor({
        propsData: {
            ...rest
        }
    })

    instance.id = id
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.vm.visible = true

    let verticalOffset = 0
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    })
    verticalOffset += 16
    instance.verticalOffset = verticalOffset
    instances.push(instance)
    instance.vm.$on('closed', () => {
        if (typeof onClose === 'function') {
            onClose(instance)
        }
        removeInstance(instance)
        instance.vm.$destroy()
    })
    return instance.vm
}

export default notify