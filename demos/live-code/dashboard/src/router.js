import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import AddEmployee from './components/AddEmployee.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dasboard',
      component: Dashboard
    },
    {
      path: '/add-employee',
      name: 'add-employee',
      component: AddEmployee
    }
  ]
})
