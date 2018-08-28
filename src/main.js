import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  mounted () {
  // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})

console.log('%c Created By Ivan Sotelo %c 1.0.0 ', 'background: #35495e; color: #fff', 'background: #60b883; color: #fff')
