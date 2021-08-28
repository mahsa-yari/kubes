<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'LayoutsDemosBaselineFlipped',
  props: {
    source: String
  }
}
</script>

<style lang="scss">
@import '@/styles/main';
</style>