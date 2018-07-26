import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('Home.vue', () => {
  let actions
  let state
  let store
  let getters

  beforeEach(() => {
    getters = {
      isMobile: () => false,
      routeName: () => false
    }

    state = {
      isMobile: false,
      routeName: false
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
    const wrapper = shallowMount(Home, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.find('.page-home__slogan').text()).toBe('For the 200ᵀᴴ Anniversary')
  })
})
