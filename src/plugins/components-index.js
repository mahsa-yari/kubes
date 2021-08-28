import Vue from 'vue'
import GlobalSnackbar from '../components/global-snackbar.vue'
import Loading from '../components/loading.vue'
import FormItem from '../components/form-item.vue'

Vue.use({
  install (Vue, options) {
    Vue.component('GlobalSnackbar', GlobalSnackbar)
    Vue.component('Loading', Loading)
    Vue.component('FormItem', FormItem)
  }
})
