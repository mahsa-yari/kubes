<template>
  <div class="search-item-component">
    <template>
      <v-text-field solo
                    :value="value"
                    v-bind="$attrs"
                    prepend-inner-icon="mdi-magnify"
                    @input="onChange"
      >
      </v-text-field>
    </template>
  </div>
</template>

<script>
/**
 * @name searchItem
 * @description search item component
 * @version 1.0.0
 * @property {String} [v-model] - default input value.
 */

export default {
  name: 'searchItem',
  props: {
    value: {
      type: [String],
      required: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style lang="scss">
  .search-item-component {
    .v-input__control {
      min-height: 2.2rem !important;
      max-width: 20rem;
      border: .1rem solid $border-normal-color !important;
      border-radius: 1.8rem;
      font-size: .875rem !important;
      &:hover {
        border: .1rem solid $border-active-color !important;
      }
    }

    .v-input--is-label-active {
      color: $text-active-color !important;
      .v-input__control {
        border: .1rem solid $border-active-color !important;
      }
      .v-input__icon--prepend-inner {
        i {
          color: $text-active-color !important;
        }
      }
    }

    .v-label {
      font-size: .875rem !important;
      color: $text-normal-color !important;
    }

    .v-input__icon {
      color: $text-normal-color !important;
    }

    .v-input__slot {
      box-shadow: none !important;
    }

    .v-input__icon--prepend-inner {
      i {
        color: $text-normal-color !important;
      }
    }
  }
</style>
