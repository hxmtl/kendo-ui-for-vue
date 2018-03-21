import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
  ]
})
