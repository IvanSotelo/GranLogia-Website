import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Navigation.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Navigation, {
      i18n,
      router,
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.find('.nav__menu--open').text()).toBe('Menu')
    expect(wrapper.find('.nav__options_sound').text()).toBe('Sound • OFF')
    expect(wrapper.find('.nav__options_language').text()).toBe('ESEN')
  })
})
