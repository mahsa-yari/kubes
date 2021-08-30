<template>
  <v-app id="inspire">
    <v-main class="mainContent">
      <v-container fluid
                   class="pa-md-16">
        <router-view />
      </v-container>
    </v-main>
    <GlobalSnackbar />
  </v-app>
</template>

<script>
export default {
  name: 'mainLayout',
  props: {
    source: String
  }
}
</script>
