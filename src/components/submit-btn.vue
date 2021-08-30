<template>
  <div class="submit-btn-component">
    <v-btn rounded
           v-bind="$attrs"
           color="#4F73D0"
           class="text-capitalize font-weight-bold text-subtitle-2 white--text"
           :disabled="isDisable"
           @click="onClick"
    >
      {{ title }}

      <v-icon v-if="icon"
              right
              size="20">
        {{ icon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
/**
 * @name submitBtn
 * @description submit btn component
 * @version 1.0.0
 * @property {String} [title] - button title default value is empty string.
 * @property {String} [icon] - button icon default value is empty string.
 * @event onSubmit - On click button action
 */

export default {
  name: 'submitBtn',
  props: {
    icon: {
      type: String,
      default: '',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    isDisable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    onClick (e) {
      this.$emit('onSubmit', e)
    }
  }
}
</script>

<style lang="scss">
  $submit-active-color: #224DBA;

  .submit-btn-component {
    .v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before {
      opacity: 0 !important;
    }

    .v-btn--contained {
      &:active {
        box-shadow: none !important;
        background-color: $submit-active-color !important;
      }
    }

    .v-ripple__animation {
      transform: none !important;
      opacity: 0 !important;
    }

    .v-btn--contained {
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.08) !important;
      &:hover {
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
      }
    }
  }
</style>
