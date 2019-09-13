import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import Vuelidate from 'vuelidate'
import VueToasted from 'vue-toasted'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueToasted)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
