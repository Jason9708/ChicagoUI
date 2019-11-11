# ChicagoUI
> 组件库UI
> 主要文件
>   examples 用于测试组件
>   packages 存放组件
>   vue.config.js 配置文件

> 若需要修改样式 ，可通过加上/deep/来提高优先级

## 组件手册
##### CaiButton
```
<cai-button type='primary' size='small' @click='handleClick'></cai-button>

type: (可选)primary | success | error
size：small | large
disabled 禁用（可选） （默认false）
shape 形状（可选） round | circle(circle建议与icon一起使用)
plain 朴素纯文字按钮 可选 （默认false）同样具有 type: primary | success | error 但size shape均失效

@click 处理点击事件
```

##### CaiIcon
```
<cai-icon name='xxx'></cai-icon>

name 图标名称
```

##### CaiLink
```
<cai-link>xxxx</cai-link>

href: 跳转链接 String
type: (可选)primary | success | danger
underline 是否显示下划线
```

##### CaiAlert
```
<cai-alert name='success-fill' title='带图标成功提示文案' type='success' @handleClose='handleClose'></cai-alert>

title: 提示文案 String
type: (可选)success | warning | error
name: 左边图标名称 String

@handleClose 处理关闭提示的回调
```

##### Message
```
通过全局方法调用组件
调用方式：
this.$message({
    content:'消息提示······',
    icon:'cai-icon-success-fill',
    type:'success'
})
##属性均可选##
content 提示内容
icon 右边图标名称
type success | warning | error
```

##### CaiRadio
```
<cai-radio :options="testArray" :selectOption="testselect" @radioChange="setRadioValue"></cai-radio>

！！该组件目前需要选项对象中还有name和value属性

options: 选项数组
selectOption: 当前所选 （需与选项的value属性对应才有效）

@radioChange: 改变当前所选时的回调（接收一个参数 - 当前所选的value值）
```

##### Divider
```
<cai-divider>XXXX</cai-divider>

direction:  (可选值)vertical 垂直分割线 其他值（或不传）均为水平分割线
content-position: left | right | center 文本内容位置
```
##### Drawer
```
<cai-drawer title='Hello,Drawer' content='Hello' width='400' :visible.sync='visibleDrawer'>

title 标题 String
content 内容 String
width 宽度 String
visible 控制显示 Boolean

@handleClose 弹窗关闭回调 
```



## 打包方式
> 以库模式打包  `vue-cli-service build --target lib --name lib`
> demo: `vue-cli-service build --target lib --name chicagoUI --dest lib packages/index.js`
> target 默认的构建应用，lib模式
## 发布到npm
> lib中建立package.json

