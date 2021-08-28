<template>
  <div class="form-item-component" :class="{ md }">
    <div class="form-label">
      <v-icon> {{ icon }} </v-icon>
      <label> {{ label }} </label>
    </div>
    <slot v-if="hasSlot"></slot>
    <template v-else>
      <v-text-field
        v-if="type === 'textbox'"
        :dir="ltr ? 'ltr' : 'rtl'"
        outlined
        :value="value"
        v-bind="$attrs"
        @input="onChange"
        @blur="onBlur"
        :class="isLoading ? 'textbox-loading' : ''"
        :append-icon="textboxAppendIcon !== '' ? textboxAppendIcon : 'mdi-information' "
      >
        <v-btn
          v-if="isLoading"
          slot="append"
          text
          color="green"
          :loading="true"
        >
        </v-btn>
      </v-text-field>
      <form-item-chips
        v-else-if="type === 'chips'"
        :value="value"
        :dir="ltr ? 'ltr' : 'rtl'"
        v-bind="$attrs"
        @input="onChange"
        @updateSearchInput="updateSearchInput"
      >
      </form-item-chips>
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
 * @property {Boolean} [ltr=false] - form input ltr direction. (default is rtl).
 * @property {Boolean} [md=false] - form input md size.
 * @property {*} [v-model] - default input value (when slot not exists).
 */
import formItemChips from '../components/form-item-chips'

export default {
  name: 'FormItem',
  components: {
    formItemChips
  },
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
      type: String,
      required: false,
      validator: v =>
        [
          'textbox',
          'chips'
        ].indexOf(v) !== -1
    },
    value: {
      type: [String, Boolean, Array, Number, File],
      required: false
    },
    ltr: {
      type: Boolean,
      required: false,
      default: false
    },
    md: {
      type: Boolean,
      required: false,
      default: false
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
    }
  },
  computed: {
    hasSlot () {
      return !!this.$slots.default
    }
  },
  methods: {
    onChange (e) {
      this.$emit('input', e)
    },
    onBlur (e) {
      this.$emit('blur', e)
    },
    onClick (e) {
      this.$emit('click', e)
    },
    onMousedown (e) {
      this.$emit('mousedown', e)
    },
    updateSearchInput (e) {
      this.$emit('updateSearchInput', e)
    }
  }
}
</script>

<style scoped lang="scss">
.form-item-component > * + * {
  margin-top: 6px;
}
.form-item-component > div + span {
  margin-top: 0px;
}
.form-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100px;
  max-width: 200px;
  i + label {
    color: #212121;
    margin: 0 15px 0 10px;
    font-size: 12px;
    color: #212121;
  }
  @media (max-width: 780px) {
    margin-bottom: 0.2em;
    max-width: 100%;
  }
}
::v-deep {
  .custome-select {
    position: absolute;
    left: 0;
    bottom: -1.9rem;
    width: 30%;
    border-radius: inherit 0 0 inherit;
  }
  .textbox-loading {
    &.v-text-field .v-input__append-inner {
      margin-top: 6px !important;
    }
  }
  .v-input__icon--append {
    .mdi-check-circle {
      &.v-icon {
        margin-bottom: 8px !important;
        color: green !important;
      }
    }
  }
  .v-input__icon--clear {
    position: absolute;
    .mdi-close-circle {
      &.v-icon {
        margin-top: 0 !important;
        margin-bottom: 9px !important;
        color: red !important;
      }
    }
  }
}
</style>
