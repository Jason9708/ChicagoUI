<template>
    <div class="cai-Checkbox-box">
        <label class="title">{{title}}</label>
        <div 
           v-for="(item, index) in options"
           :key="index"
           class="checkboxLink">
        <div class="checkboxList">
            <div class="checkboxArea">
            <label>
                <span>
                    <input type="checkbox"
                            :value="item"
                            class="checkboxInput"
                            v-model="selectedValue"
                            :disabled="typeof item == 'string' ? false : item.disabled == true ? true :false">
                    <span class="checkSelect"
                        :class="typeof item == 'string' ? '' : item.disabled == true ? 'checkSelectDisabled' : '' "></span>
                </span>
                <span class="selectListItem">{{typeof item == 'string' ? item : item.label}}</span>
            </label>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CaiCheckbox',
    data(){
        return{
            selectedValue: []
        }
    },
    props: {
        title: String,
        options: [String,Array]
    },
    watch:{
        selectedValue () {
            this.$emit('getData', this.selectedValue)
        }
    },
    created(){
        if (typeof (this.options) == 'string') {
            this.options = eval("(" + this.options + ")")
        }
        var that = this
        if (that.options.length > 0) {
            that.options.forEach((item) => {
            item.checked == true ? that.selectedValue.push(item) : ''
        })
            that.$emit('getData', that.selectedValue)
        }
    },
    methods:{

    }
}
</script>

<style lang='less' scoped>
.title {
  color: #888;
  font-size:12px;
  display: block;
  padding: 10px 0px;
}
.checkboxLink {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  justify-content:center;
  align-items:center;
  padding:1px 2px;
  margin:3px;
  border:1px solid #888;
  border-radius:5px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}

.checkboxList {
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
}

.checkboxArea,
.checkboxArea label {
  width: 100%;
  display: flex;
  align-items:center;
}

.checkboxInput {
  display: none;
}

.checkSelect {
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  border: 1px solid #ccc;
  position: relative;
  width: 15px;
  height: 15px;
  vertical-align: middle;
}

.checkSelectDisabled {
  background-color: #d9d9d9;
  border-color: #ccc;
}

.checkboxInput:disabled + .checkSelect {
  background-color: #d9d9d9 !important;
  border-color: #ccc !important;
}

.checkboxInput:checked + .checkSelect {
  background-color: #26a2ff;
  border-color: #26a2ff;
}

.checkboxInput:checked + .checkSelect::after {
  border-color: #fff;
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}

.checkboxInput:checked + .checkboxLink{
    border:2px solid red;
}
.checkboxInput:checked + .checkboxLink::after{
    border:2px solid red;
}

.checkSelect::after {
  border: 2px solid transparent;
  border-left: 0;
  border-top: 0;
  content: ' ';
  top: 0px;
  left: 4px;
  position: absolute;
  width: 4px;
  height: 8px;
  -webkit-transform: rotate(45deg) scale(0);
  transform: rotate(45deg) scale(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

.selectListItem {
  font-size: 0.3rem;
  vertical-align: middle;
  margin-left: 6px;
}
</style>