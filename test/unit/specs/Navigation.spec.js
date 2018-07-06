import Vue from 'vue'
import Navigation from '@/components/Navigation'
import Router from 'vue-router'

Vue.use(Router)

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Navigation)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.nav__menu--open').textContent)
      .toEqual('Menu')
    expect(vm.$el.querySelector('.nav__options_sound').textContent)
      .toEqual('Sound • Off')
  })
})
