import { shallowMount, createLocalVue } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('Contact.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        isMobile: false,
        audio: 'on',
        routeName: 'is-contact'
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
    const wrapper = shallowMount(Contact, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    const columns = wrapper.findAll('.col-6')
    expect(wrapper.findAll('.col-6').length).toBe(12)
    const firstColumn = columns.at(0)
    expect(firstColumn.find('p').text()).toBe('Archive materials')
    const secondColumn = columns.at(2)
    expect(secondColumn.find('p').text()).toBe('Music')
    const thirdColumn = columns.at(4)
    expect(thirdColumn.find('p').text()).toBe('Development')
    const fourColumn = columns.at(6)
    expect(fourColumn.find('p').text()).toBe('Design')
  })
})
