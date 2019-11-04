# chicagoui
> 组件库UI
> demo02用于测试

> packages // 用来存放组件代码
> examples // 示例应用 即src
> lib // 存放打包后的包

> ui组件库
> import index from '../components/index'
> Vue.component(index.name,index)
> Vue.use(index)

> 都可以全局注册组件。install方法
> Vue.use() // 执行install方法

## 开发组件
## 打包库
> 以库模式 vue-cli-service build --target lib --name lib
> demo:vue-cli-service build --target lib --name chicagoUI --dest lib packages/index.js
> target 默认的构建应用，lib模式（没有vue）
## 发布到npm
> lib中建立package.json

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
