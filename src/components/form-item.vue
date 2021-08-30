<template>
  <div class="form-item-component">
    <div>
      <label class="text-caption"> {{ label }} </label>
    </div>
    <template>
      <v-text-field
        v-if="type === 'textbox'"
        solo
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      >
      </v-text-field>

      <v-textarea
        v-else-if="type === 'textarea'"
        no-resize
        solo
        :value="value"
        v-bind="$attrs"
        @input="onChange"
      ></v-textarea>

      <div v-if="type === 'chips'">
        <v-text-field
          v-model="chips"
          solo
          v-bind="$attrs"
          hide-details
        >
          <v-btn
            slot="append"
            text
            :color="chips ? '#4F73D0' : '#E7E7E7'"
            class="font-weight-bold text-capitalize px-0"
            @click="onClick"
          >
            {{ btnTitle }}

            <v-icon v-if="icon"
                    right
                    size="16">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-text-field>
        <v-chip
          v-for="(item, index) in chipsArray"
          v-bind:key="index"
          class="mr-2 mb-2"
          color="#9D9D9D"
          outlined
        >
          <v-icon left
                  size="18"
                  class="has-hand-cursor"
                  @click="onRemove(item)">
            mdi-close
          </v-icon>

          {{ item }}
        </v-chip>
      </div>
    </template>
  </div>
</template>

<script>
/**
 * @name formItem
 * @description form item component for horizontal-form
 * @version 1.0.0
 * @property {string} [icon] - form label icon name.
 * @property {string} [label] - form label text.
 * @property {string} [type] - form input type (when slot not exists).
 * @property {*} [v-model] - default input value (when slot not exists).
 */

export default {
  name: 'FormItem',
  props: {
    index: {
      type: [String, Number],
      required: false
    },
    label: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    type: {
      type: [String, Array],
      required: false,
      validator: v =>
        [
          'textbox',
          'textarea',
          'chips'
        ].indexOf(v) !== -1
    },
    value: {
      type: [String, Boolean, Array, Number, File],
      required: false
    },
    btnTitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      chips: '',
      chipsArray: []
    }
  },
  computed: {
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    },
    onClick () {
      if (!this.chipsArray.includes(this.chips)) {
        this.chipsArray.push(this.chips)
      }
      this.chips = ''
      this.$emit('onSubmit', this.chipsArray)
    },
    onRemove (e) {
      this.chipsArray = this.chipsArray.filter(item => { if (item !== e) return item })
      this.$emit('onSubmit', this.chipsArray)
    }
  }
}
</script>

<style lang="scss">

  .form-item-component {
    .v-input__slot {
      min-height: 2.5rem !important;
      border: .1rem solid $border-normal-color !important;
      border-radius: 0.4rem;
      font-size: .875rem !important;
    }

    .v-input--is-focused {
      .v-input__slot {
        border: .1rem solid $border-active-color !important;
      }
    }

    .v-input--is-label-active {
      color: black !important;
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

    .v-chip {
      &:hover {
        color: $text-active-color !important;
      }
      &:not(.v-chip--active) {
        background: white !important;
      }
    }
  }

</style>
