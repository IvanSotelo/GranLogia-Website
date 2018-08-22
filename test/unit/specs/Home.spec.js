import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('Home.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        isMobile: false,
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
      getters: Config.getters
    })
  })

  it('should render correct contents', () => {
    const wrapper = shallowMount(Home, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.find('.page-home__slogan').text()).toBe('For the 200ᵀᴴ Anniversary')
    expect(wrapper.find('.page-home__title').text()).toBe('Ivan Aivazovsky')
  })
})
