import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/Paquime-Website/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
