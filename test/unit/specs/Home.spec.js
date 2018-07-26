import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.page-home__slogan').textContent)
      .toEqual('For the 200ᵀᴴ Anniversary')
    expect(vm.$el.querySelector('.page-home__title').textContent)
      .toEqual('Ivan Aivazovsky')
  })
})
