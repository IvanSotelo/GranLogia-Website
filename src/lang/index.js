import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './locals/en_US'
import es from './locals/es_MX'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueI18n)

export default new VueI18n({
  locale: Vue.localStorage.get('language', 'es'),
  messages: {
    en: {
      lang: en
    },
    es: {
      lang: es
    }
  }
})
