import { shallowMount, createLocalVue } from '@vue/test-utils'
import SiteMenu from '@/components/SiteMenu.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('SiteMenu.vue', () => {
  let actions
  let state
  let store
  let getters

  beforeEach(() => {
    getters = {
      isMobile: () => false,
      menuOpen: () => false
    }

    state = {
      isMobile: false,
      menuOpen: false
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
    const wrapper = shallowMount(SiteMenu, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.find('.site-menu--close').text()).toBe('Close')
  })
})
