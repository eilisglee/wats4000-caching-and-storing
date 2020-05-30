import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLocalStorage from 'vue-ls'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

let options = {
  namespace: 'weater__'
};

Vue.use(VueLocalStorage, options);