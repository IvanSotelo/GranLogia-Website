import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '@/components/Home'
import History from '@/components/History'
import Freemasonry from '@/components/Freemasonry'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: '/GranLogia-Website/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/freemasonry',
      name: 'freemasonry',
      component: Freemasonry
    }
  ]
})
