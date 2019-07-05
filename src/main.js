import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(Message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    console.log(this.$options.el) // => '#app'
  }
})
