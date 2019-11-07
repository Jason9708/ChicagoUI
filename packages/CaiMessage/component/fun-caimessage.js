import Message from './index.vue'

export default {
    extends: Message,
    computed: {
        style() {
            return {}
        }
    },
    data() {
        return {
            visible: false, // 显示
            height: 0, // 
            autoClose: 3000
        }
    },
    mounted() {
        this.createTimer()
    },
    methods: {
        createTimer() {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.doClose()
                }, this.autoClose)
            }
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer)
                this.doClose()
            }
        },
        setHeight() {
            this.height = this.$el.offsetHeight
        }
    }
}