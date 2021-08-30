<template>
  <div class="card-item-component">
    <v-card outlined
            height="352">

      <v-img v-if="post.image"
             class="ma-3"
             height="123"
             :lazy-src="post.image"
             :src="post.image"
      ></v-img>

      <v-card-title class="font-weight-bold py-0"
      >{{post.title}}</v-card-title>

      <v-card-text class="py-0 v-card-text__description"
                   v-html="post.text"/>

      <v-card-text class="py-0">
        <v-chip-group outlined
                      column
        >
          <v-chip v-for="(tag,index) in post.tags"
                  v-bind:key="index"
                  outlined
                  small
                  class="mb-0 mr-1 subtitle--color"> {{ tag }} </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="py-0">
        <v-list-item>
          <v-list-item-avatar color="grey darken-3"
                              class="mr-1"
                              size="28">
            <v-img
              class="elevation-6"
              :src="post.user.avatar"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-small title--color">{{post.user.firstName}} {{post.user.lastName}}</v-list-item-title>
            <v-list-item-title class="text-small subtitle--color">{{post.publishDate | date}}</v-list-item-title>
          </v-list-item-content>

          <v-row
            align="center"
            justify="end"
          >
            <span class="text-caption subtitle--color">{{post.likes}}</span>
            <v-icon color="#9D9D9D"
                    size="18">
              mdi-heart-outline
            </v-icon>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
/**
 * @name cardItem
 * @description
 * @version 1.0.0
 */

export default {
  name: 'cardItem',
  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
  $text-light-grey-color: #9D9D9D;
  $text-dark-grey-color: #2D2D2D;

  .card-item-component {
    .v-card-text__description {
      line-height: 1rem;
      max-height: 5rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .v-card__actions {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .text-small {
      font-size: 0.65rem;
    }

    .title--color {
      color: $text-dark-grey-color;
    }

    .subtitle--color {
      color: $text-light-grey-color;
    }

    .v-slide-group__content {
      max-height: 2rem;
    }
  }
</style>
