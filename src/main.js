import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装toast
Vue.use(toast)

//使用图片懒加载
Vue.use(vuelazyload)

//解决移动端300ms的延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
