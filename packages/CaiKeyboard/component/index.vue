<template>
    <div>
        <ul class="keyboard">
            <li v-for="(key,index) in keyList"
                :key="index" 
                :class="{delete: key === 'Delete', tab: key === 'Tab', capslock: key === 'Caps', 
                        enter: key === 'Enter', shift: key === 'Shift', space: key === 'Space', 
                        shifted: (key === 'Shift') && hadShifted, capsed: (key === 'Caps') && hadCapsed }" 
                v-text="key" @click="keyDown(key)">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CaiKeyboard',
    data(){
        return {
            inputText:'', // 存放输入内容
            keyList:[], // 当前键盘键
            keyByNormal:[], // 普通键盘键
            keyByShifted:[], // 存放shift键按下后出现的键盘键
            keyByCapsed:[], // 存放Caps键按下后出现的键盘键
            hadShifted:false, // 是否按下Shift键
            hadCapsed:false, // 是否按下Caps键
        }
    },
    created(){
        // 设置普通键盘按键
        this.keyByNormal = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
                             'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                             'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
                             'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 
                             'Space'],
        // 设置按下shift后出现的键盘键
        this.keyByShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Delete',
                               'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
                               'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
                               'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 
                               'Space'],
        // 设置按下Caps键后出现的键盘键
        this.keyByCapsed = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Delete',
                            'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
                            'Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
                            'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 
                            'Space'];
        // 初始化当前键盘（默认普通键盘）
        this.keyList = this.keyByNormal
    },
    methods:{
        /**
         *  点击键盘键触发事件
         *  @key 所按键盘键
         */
        keyDown(key){
            switch(key) {
                // 特殊键盘键处理
                case "Delete":
                    let currentInput = this.inputText
                    // 当前有内容时，点击一次Delete，删除一个字符
                    this.inputText = currentInput.length ? currentInput.substring(0, currentInput.length - 1) : currentInput 
                    break
                case "Tab":
                    // 点击Tab，拼接\t
                    this.inputText += "\t"
                    break
                case "Enter":
                    // 点击Enter，进行换行。拼接\n
                    this.inputText += "\n"
                    break
                case "Space":
                    // 点击Space，输入空格。拼接空格
                    this.inputText += " "
                    break
                case "Caps":
                    // 点击Caps，切换键盘键（大写父母），再次点击切回普通键盘
                    this.hadCapsed = !this.hadCapsed
                    this.hadShifted = false // 若按下过Shift键，重置为false
                    this.keyList = this.hadCapsed ? this.keyByCapsed : this.keyByNormal
                    break
                case "Shift":
                    // 点击Caps，切换键盘键（大写父母），再次点击切回普通键盘
                    this.hadShifted = !this.hadShifted
                    this.hadCapsed = false // 若按下过Caps键，重置为false
                    this.keyList = this.hadShifted ? this.keyByShifted : this.keyByNormal
                    break
                default:
                    // 普通键盘键直接拼接
                    this.inputText += key.toString()
                    break

            }

            this.$emit('getCurrentKey',key)
			this.$emit('getText',this.inputText)
        }
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>