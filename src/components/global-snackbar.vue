<template>
  <div class="global-snackbar-component">
    <v-snackbar
      v-model="show"
      :color="color"
      content-class="text-center"
      :rounded="isRounded ? 'pill' : ''"
      absolute
      :top="isTop"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
/**
 * @name globalSnackbar
 * @description global vuetify snackbar for showing messages
 * @version 1.0.0
 */
export default {
  data () {
    return {
      show: false,
      message: '',
      color: '',
      isTop: false,
      isRounded: false
    }
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.color = state.snackbar.color
        this.message = state.snackbar.content
        this.show = true
        this.isRounded = state.snackbar.isRounded
        this.isTop = state.snackbar.isTop
      }
    })
  }
}
</script>
