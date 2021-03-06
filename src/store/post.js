/* eslint-disable no-undef */
export default {
  namespaced: true,
  actions: {
    getPost (context, payload) {
      const promise = axios.request({
        method: 'get',
        url: '/posts',
        params: payload
      })
      promise
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log(e)
        })
      return promise
    },

    getPostDetails (context, payload) {
      const promise = axios.request({
        method: 'get',
        url: `/posts/${payload}?_expand=user`
      })
      promise
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log(e)
        })
      return promise
    },

    addPost (context, payload) {
      const promise = axios.request({
        method: 'post',
        url: '/posts',
        data: payload
      })
      promise
        .then(response => {
          return response.data
        })
        .catch(e => {
          console.log(e)
        })
      return promise
    },

    getMenuList (context) {
      const promise = axios.request({
        method: 'get',
        url: 'b/60a56bcc4e1de86b45d201ae'
      })
      promise
        .then(res => {
          return res.data
        })
      return promise
    }
  }
}
