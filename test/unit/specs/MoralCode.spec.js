import { shallowMount, createLocalVue } from '@vue/test-utils'
import MoralCode from '@/components/MoralCode.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('MoralCode.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        isMobile: false,
        audio: 'on',
        routeName: 'is-moral-code'
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
    const wrapper = shallowMount(MoralCode, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.contains('p')).toBe(true)
  })
})
