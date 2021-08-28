import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default (APP_CONFIG) => {
  return new Vuetify({
    rtl: APP_CONFIG.rtl,
    theme: {
      dark: APP_CONFIG.darkTheme,
      themes: APP_CONFIG.themes,
      options: {
        customProperties: true
      }
    },
    lang: {
      locales: APP_CONFIG.locales,
      current: APP_CONFIG.locale
    }
  })
}
