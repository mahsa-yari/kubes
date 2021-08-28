<template>
  <v-app
    id="inspire">
    <v-main
      class="mainContent"
      >
      <v-container
        fluid
        >
        <v-row >
          <v-col class="pt-0">
            <router-view />
          </v-col>
        </v-row>
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
