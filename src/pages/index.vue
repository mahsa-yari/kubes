<route>
{
  "name": "index"
}
</route>
<template>
  <loading v-if="isLoading"/>

  <v-card
    v-else>
      <div  v-for="(item, index) in menuList"
            v-bind:key="item.title + '' + index">
          <Menu
            v-if="item.parentId == null"
            :menuList="menuList"
            :menuItem="item"/>
      </div>
  </v-card>
</template>

<script>
import Menu from '@/components/menu.vue'
import { mapActions } from 'vuex'

export default {
  name: 'index',
  layout: 'main',
  components: {
    Menu
  },
  data () {
    return {
      menuList: null,
      selectedItem: null
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    ...mapActions({
      getMenuList: 'post/getMenuList'
    }),

    loadData () {
      this.getMenuList()
        .then(res => {
          this.menuList = res.data
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss"></style>
