import APP_CONFIG from '@/config'
export default {
  namespaced: true,
  state: {
    productAttributes: {
      color: 'Color',
      size: 'Size'
    }
  },
  getters: {
    productAttributesArray (state) {
      return Object.entries(state.productAttributes).map(([key, value]) => {
        return {
          value,
          text: APP_CONFIG.locales[APP_CONFIG.locale].enums.productAttributes[key]
        }
      })
    }
  }
}
