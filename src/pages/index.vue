<route>
{
  "name": "index"
}
</route>
<template>
  <!-- Todo: best practices use locale file  -->
  <div>
    <v-row class="mb-4"
           no-gutters>
      <v-col>
        <search-item
          v-model="searchText"
          placeholder="Search"
          hide-details
          @input="search"
        />
      </v-col>

      <v-col class="d-flex justify-end">
        <submit-btn
          title="Add new post"
          icon="mdi-plus-circle"
          @onSubmit="$router.push('/addPost')"
        />
      </v-col>
    </v-row>

    <v-row  v-if="postsWithUser.length > 0"
            class="px-1">
      <v-col
        v-for="post in postsWithUser"
        :key="post.id"
        class="px-2 py-3"
        cols="12"
        sm="6"
        md="3"
        xl="2">
        <card-item
          :post="post"/>
      </v-col>
    </v-row>

    <loading v-if="isLoading"/>

    <v-card v-intersect="infiniteScrolling"/>
  </div>
</template>

<script>
import SearchItem from '@/components/search-item.vue'
import CardItem from '@/components/card-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'index',
  layout: 'main',
  components: {
    SearchItem,
    CardItem
  },
  data () {
    return {
      posts: [],
      postsWithUser: [],
      searchText: '',
      itemPerLoad: 16,
      loadCount: 1,
      itemIndex: 0,
      isLoading: true,
      debounce: null
    }
  },
  created () {
    this.loadData({ q: '' })
  },
  methods: {
    ...mapActions({
      getPost: 'post/getPost',
      getPostDetails: 'post/getPostDetails'
    }),

    // Todo: best practices use cancel axios request
    search (e) {
      this.isLoading = true
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.loadData({ q: e })
      }, 600)
    },

    loadData (payload) {
      this.getPost(payload)
        .then((res) => {
          this.posts = res.data
          this.postsWithUser = []
          this.loadCount = 1
          this.itemIndex = 0
          this.loadUserData()
        })
    },

    loadUserData () {
      this.isLoading = true

      const promiseArray = []
      for (this.itemIndex;
        this.itemIndex < this.loadCount * this.itemPerLoad && this.itemIndex < this.posts.length;
        this.itemIndex++) {
        const apiRequest = this.getPostDetails(this.posts[this.itemIndex].id)
        promiseArray.push(apiRequest)
      }

      this.loadCount++

      Promise.all(promiseArray)
        .then((res) => {
          res.forEach((item) => {
            this.postsWithUser.push(item.data)
          })
          this.isLoading = false
        })
    },

    infiniteScrolling (entries, observer, isIntersecting) {
      if (isIntersecting && this.posts.length > 0) {
        this.loadUserData()
      }
    }
  }
}
</script>

<style lang="scss"></style>
