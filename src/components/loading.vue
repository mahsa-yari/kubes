<template>
  <div class="loading-component">
    <div class="d-flex justify-center mx-auto px-5 py-5" >
      <v-progress-circular
        :width="3"
        color="primary"
        indeterminate
        >
      </v-progress-circular>

    </div>
  </div>
</template>

<script>
/**
 * @name loading
 * @description loading before load data
 * @version 1.0.0
 *
 * @note: Replace [*] with new data and keep this comment above all components, for more information please
 follow https://jsdoc.app/index.html
 * @note To write document about props, methods and events you could use jsdoc.
 */
export default {
  name: 'Loading'
}
</script>
