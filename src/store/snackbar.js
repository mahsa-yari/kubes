export default {
  namespaced: true,
  state: {
    content: '',
    color: '',
    isRounded: false,
    show: '',
    isTop: false
  },
  mutations: {
    showMessage (state, payload) {
      state.content = payload.content
      state.color = payload.color
      state.show = true
      state.isRounded = payload.isRounded
      state.isTop = payload.isTop
    }
  },
  actions: {
    showToastMessage (context, payload) {
      context.commit('showMessage', payload)
    }
  }
}
