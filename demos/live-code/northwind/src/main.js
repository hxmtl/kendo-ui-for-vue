import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
