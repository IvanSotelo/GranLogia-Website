import { shallowMount, createLocalVue } from '@vue/test-utils'
import History from '@/components/History.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('History.vue', () => {
  let actions
  let state
  let store
  let getters

  beforeEach(() => {
    getters = {
      isMobile: () => false
    }

    state = {
      isMobile: false
    }

    actions = {
      moduleActionClick: jest.fn()
    }

    store = new Vuex.Store({
      state,
      actions,
      getters
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
