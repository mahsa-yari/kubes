import Axios from 'axios'
import store from '@/store'

export default () => {
  const axios = Axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
  })

  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      const responseStatus = error.response.status
        ? error.response.status
        : null
      if (responseStatus === 500) {
        const errorMessage =
          APP_CONFIG.locales[APP_CONFIG.locale].errorMessages.serverError
        store.dispatch('snackbar/showToastMessage', {
          content: errorMessage,
          color: 'error',
          isTop: true,
          isRounded: true
        })
        return Promise.reject(response)
      }
    }
  )
  return axios
}
