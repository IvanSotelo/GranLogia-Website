import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'
import Preload from '../../../src/store/modules/Preload'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)
const router = new VueRouter(
  {routes: [
    {
      path: '/',
      meta: { index: 0 }
    }
  ]}
)

describe('Navigation.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        audio: 'on',
        routeName: 'is-home'
      }
    }

    actions = {
      ROUTE_NAME: jest.fn()
    }

    store = new Vuex.Store({
      state,
      actions,
      getters: {...Config.getters, ...Preload.getters}
    })
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Navigation, {
      i18n,
      store,
      localVue,
      router,
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.find('.nav__menu--open').text()).toBe('Menu')
    expect(wrapper.find('.nav__options_sound').text()).toBe('Sound • on')
    expect(wrapper.find('.nav__options_language').text()).toBe('ESEN')
  })
})
