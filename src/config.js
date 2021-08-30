import fa from './locale/fa'
import en from './locale/en'

// NOTE: put all applciation config here
export default {
  homeURL: '/',
  locale: 'fa',
  locales: {
    fa,
    en
  },
  rtl: false,
  darkTheme: false,
  themes: {
    light: {
      mainContent: '#ffffff',
      formInputColor: '#F3F7F9',
      borderColor: '#E1E7EE',
    },
    dark: {
      mainContent: '#000000',
      formInputColor: '#2C2C2C',
      borderColor: '#4E4E4E',
    }
  },
  layout: {
    mainLayout: 'main',
  },
  validBrowsers: {
    chrome: '>30',
    firefox: '>30',
    ie: '>10',
    edge: '>12',
    safari: '>3.1',
    opera: '>12'
  }
}
