import { createApp } from 'vue'
// 从一个单文件组件中导入"根组件"
import App from './init/App.vue'

import './init/assets/main.css'

const app = createApp(App)  //返回"应用实例"，createApp允许在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。
app.mount('#app')           //返回"根组件实例"，调用了 .mount() 方法后"应用实例"才会被渲染出; #app是挂载(存放)根组件的容器

//.config 对象配置一些应用级的选项
//定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误
app.config.errorHandler = (err) => {
/* 处理错误 */
}