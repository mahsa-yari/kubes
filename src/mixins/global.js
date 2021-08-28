export default {
  beforeCreate () {
    this.$t = function (key, ...params) {
      return this.$vuetify.lang.t(`$vuetify.${key}`, ...params)
    }
  },
  methods: {
  }
}
