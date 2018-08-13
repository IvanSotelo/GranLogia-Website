import { shallowMount, createLocalVue } from '@vue/test-utils'
import History from '@/components/History.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('History.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        isMobile: false,
        audio: 'on',
        routeName: 'is-history'
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
    const wrapper = shallowMount(History, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.find('.history__aside-filter--title').text()).toBe('Capitulos')
    expect(wrapper.find('.main-childhood').text()).toBe('Childhood')
    expect(wrapper.find('.side-childhood').text()).toBe('I')
    expect(wrapper.find('.side-imperial-academy-of-arts').text()).toBe('II')
  })
})
