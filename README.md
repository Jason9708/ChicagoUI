# ChicagoUI
> 组件库UI
> 主要文件
>   examples 用于测试组件
>   packages 存放组件
>   vue.config.js 配置文件


## 组件手册
##### CaiButton
```
<cai-button type='primary' size='small' @click='handleClick'></cai-button>

type: primary | success | error
size：small | large
disabled 禁用（可选） （默认false）
shape 形状（可选） round | circle(circle建议与icon一起使用)
```

## 打包方式
> 以库模式打包  `vue-cli-service build --target lib --name lib`
> demo: `vue-cli-service build --target lib --name chicagoUI --dest lib packages/index.js`
> target 默认的构建应用，lib模式（没有vue）
## 发布到npm
> lib中建立package.json

