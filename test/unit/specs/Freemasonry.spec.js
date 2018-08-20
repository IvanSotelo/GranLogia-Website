import { shallowMount, createLocalVue } from '@vue/test-utils'
import Freemasonry from '@/components/Freemasonry.vue'
import i18n from '../../../src/lang'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Config from '../../../src/store/modules/Config'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('Freemasonry.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      Config: {
        isMobile: false,
        audio: 'on',
        routeName: 'is-freemasonry'
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
    const wrapper = shallowMount(Freemasonry, {
      i18n,
      localVue,
      store,
      router,
      stubs: ['router-link']
    })
    expect(wrapper.find('.text').text()).toBe('July 29th is the 200th anniversary of the birth of Ivan Aivazvsky. He early showed a special attraction to the sea and was the most brilliant consistent representative seascape painter throughout the XIX century. Aivazovskys creativity deep roots connected with Russian Art of the late XVIII and XIX centuries, and in turn impacted on him fruitfully. He was keenly aware of the charm of the changing sea elements and diversity, this greatly reflected his work. He studied the sea, he kenw it by heart, and with extraordinary ease, he portrayed it.')
  })
})
