<template>
  <div class="menu-component">
      <span> {{menuItem.title}} {{menuItem.id}}</span>

      <div v-if="subMenu.length > 0 && menuItem.id !== menuItem.parentId"
           class="pl-10 mb-3">
        <div v-for="(subMenuItem,index) in subMenu"
            v-bind:key="subMenuItem.title + ' ' + index">
          <Menu
            :menuList="menuList"
            :menuItem="subMenuItem"/>
        </div>
      </div>
  </div>
</template>

<script>
/**
 * @name menu
 * @description
 * @version 1.0.0
 */

export default {
  name: 'Menu',
  props: {
    menuList: {
      type: Array,
      require: true
    },
    menuItem: {
      type: Object,
      require: true
    }
  },
  computed: {
    subMenu () {
      return this.menuList.filter(item => {
        if (this.menuItem.id === item.parentId) return item
      })
    }
  }
}
</script>
