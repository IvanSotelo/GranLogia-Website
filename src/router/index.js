import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from '@/components/Home'
import History from '@/components/History'
import Freemasonry from '@/components/Freemasonry'
import MoralCode from '@/components/MoralCode'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: '/GranLogia-Website/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { index: 0 }
    },
    {
      path: '/history',
      name: 'history',
      component: History,
      meta: { index: 1 }
    },
    {
      path: '/freemasonry',
      name: 'freemasonry',
      component: Freemasonry,
      meta: { index: 2 }
    },
    {
      path: '/moral-code',
      name: 'moral-code',
      component: MoralCode,
      meta: { index: 3 }
    }
  ]
})
