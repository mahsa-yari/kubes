import Vue from 'vue'
import APP_CONFIG from './config'
import App from './app.vue'
import './registerServiceWorker'
import router from './router/index.js'
import store from './store'
import Vuetify from './plugins/vuetify'
import componentsIndex from '@/plugins/components-index'
import globalMixin from '@/mixins/global'
import Filters from '@/filters'
import Bowser from 'bowser'
import browserVersionCompatibility from '@/plugins/browser-compatibility'
import Axios from '@/plugins/axios'

const browser = Bowser && Bowser.getParser(window.navigator.userAgent)

const isValidBrowser = browser && browser.satisfies(APP_CONFIG.validBrowsers)

browserVersionCompatibility(isValidBrowser)

Vue.mixin(globalMixin)

Filters(APP_CONFIG)

Vue.mixin({
  beforeCreate () {
    this.APP_CONFIG = APP_CONFIG
  }
})

const vuetify = Vuetify(APP_CONFIG)

const AxiosObject = Axios()
window.axios = AxiosObject
Vue.prototype.$axios = AxiosObject.axios

router.beforeEach((to, from, next) => {
  next()
})

window.APP_CONFIG = APP_CONFIG

Vue.config.productionTip = false

new Vue({
  router,
  store,
  componentsIndex,
  vuetify,
  render: h => h(App)
}).$mount('#app')
