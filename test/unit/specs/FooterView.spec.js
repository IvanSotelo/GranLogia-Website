import { shallowMount, createLocalVue } from '@vue/test-utils'
import FooterView from '@/components/FooterView'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('FooterView.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(FooterView, {
      i18n,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.find('.footer__archive').text()).toBe('Archive')
    expect(wrapper.find('.footer-nav').text()).toBe('Grand LondgeContact')
  })
})
