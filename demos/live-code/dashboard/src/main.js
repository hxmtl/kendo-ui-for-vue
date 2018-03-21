import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { Chart, ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(GridInstaller)
Vue.use(ChartInstaller)
Vue.use(DataSourceInstaller)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
