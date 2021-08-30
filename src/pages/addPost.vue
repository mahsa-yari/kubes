<route>
{
  "name": "addPost"
}
</route>
<template>
  <v-card elevation="0"
          class="mx-auto"
          width="503">
    <v-row no-gutters
           class="mb-5">
      <v-col class="px-0">
        <v-btn class="mr-5"
               outlined
               fab
               small
               color="#e7e7e7"
               @click="$router.go(-1)"
        >
          <v-icon color="#2d2d2d">mdi-arrow-left</v-icon>
        </v-btn>
        <span class="font-weight-bold text-h6">New post</span>
      </v-col>

      <v-col align="end">
        <submit-btn title="Publish post"
                    :isDisable="formData.title === '' || formData.text === '' || formData.tags.length === 0"
                    @onSubmit="submitForm" />
      </v-col>
    </v-row>
    <!-- use validation -->
    <v-form>
      <form-item v-model="formData.title"
                 type="textbox"
                 label="Title" />

      <form-item v-model="formData.text"
                 type="textarea"
                 label="Description" />

      <form-item v-model="formData.tags"
                 type="chips"
                 label="Tags"
                 btn-title="Add"
                 icon="mdi-plus"
                 @onSubmit="onClick" />
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'addPost',
  layout: 'main',
  data () {
    return {
      formData: {
        title: '',
        text: '',
        tags: '',
        publishDate: ''
      }
    }
  },

  methods: {
    ...mapActions({
      addPost: 'post/addPost',
      showToast: 'snackbar/showToastMessage'
    }),

    submitForm () {
      this.formData.publishDate = new Date()

      this.addPost(this.formData)
        .then((res) => {
          this.showToast({ content: 'Post added successfully', color: 'success' })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    onClick (e) {
      this.formData.tags = e
    }
  }
}
</script>
