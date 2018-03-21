import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import dataProvider from "./data-provider.js";
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { Chart, ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { NumericTextBox, InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
import { Button, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { DatePicker, DateinputsInstaller} from '@progress/kendo-dateinputs-vue-wrapper'
import { DropDownList, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'


//[GridInstaller, ChartInstaller, DataSourceInstaller, InputsInstaller].forEach(installer => Vue.use(installer));
Vue.use(GridInstaller)
Vue.use(ChartInstaller)
Vue.use(DataSourceInstaller)
Vue.use(InputsInstaller)
Vue.use(ButtonsInstaller)
Vue.use(DropdownsInstaller)
Vue.use(DateinputsInstaller)
Vue.use(ValidatorInstaller)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
