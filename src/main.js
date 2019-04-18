// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 引入fastClick库以解决某些手机click事件延迟3s钟问题
import 'styles/reset.css' // 引入reset.css以解决不同手机浏览器的样式初始化问题
import 'styles/border.css' // 引入border.css以解决不同手机1像素边框问题
import 'styles/iconfont.css' // 引入iconfont
import store from './store'
import 'babel-polyfill'
Vue.config.productionTip = false
fastClick.attach(document.body) // 使用fastClick
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
/* 路由就是根据网址的不同而返回不同的内容给客户 */
