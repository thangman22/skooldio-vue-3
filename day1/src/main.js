import Vue from 'vue'
import App from './App.vue'
// install `npm install vee-validate`
// Import after install
import VeeValidate from 'vee-validate'
 // use plugin
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
