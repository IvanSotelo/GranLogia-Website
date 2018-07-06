import Vue from 'vue'
import FooterView from '@/components/FooterView'

describe('FooterView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(FooterView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.footer__archive').textContent)
      .toEqual('Archive')
  })
})
