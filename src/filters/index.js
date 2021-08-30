import Vue from 'vue'

export default () => {
  Vue.filter('date', date => {
    let result = null
    if (date) {
      const newDate = new Date(date)
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      result = newDate.getDay() + 1 + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear()
    }
    return result
  })
}
