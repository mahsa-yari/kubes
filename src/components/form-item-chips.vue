<template>
  <v-input
    class="form-item-chips"
    :error-messages="error.message"
    :error="error.hasError"
    >
    <div
      class="chips-area">
      <div
        class="chips-control"
        >
        <div
          class="d-flex align-center"
          >
          <v-combobox
            v-if="searchEnabled"
            ref="searchInput"
            v-model="inputValue"
            :items="$attrs.options"
            :placeholder="$attrs.placeholder"
            :loading="$attrs.loading"
            :search-input.sync="search"
            hide-details
            outlined
            hide-no-data
            hide-selected
            item-value="API"
            item-text="text"
            v-on:keyup.enter="onAdd"
            >
            <template v-slot:item="data">
              <span
                v-if="data.item.text">
                {{ data.item.text }}
              </span>
              <span
                v-if="searchValueEnabled"
                class="text-caption primary--text mx-1"
                >
                ({{ data.item.value }})
              </span>
            </template>
          </v-combobox>
          <v-text-field
            v-if="!searchEnabled"
            ref="searchInput"
            v-model="inputValue"
            :placeholder="$attrs.placeholder"
            hide-details
            outlined
            v-on:keyup.enter="onAdd"
          ></v-text-field>
          <v-tooltip
            :color="chipsTooltipColor"
            top
            >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                text
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>
                  {{ tooltipBtnIcon }}
                </v-icon>
                <span
                  class="text-body-2"
                  >
                  {{ tooltipBtnText }}
                </span>
              </v-btn>
            </template>
            <span>
              {{ tooltipMessage }}
            </span>
          </v-tooltip>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="btn-add py-5 rounded"
          :color="btnColor"
          rounded
          @click="onAdd"
          >
          <v-icon>
            {{ btnIcon }}
          </v-icon>
          <span
            class="px-3"
            >
            {{ btnText }}
          </span>
        </v-btn>
      </div>
      <v-chip-group
        class="chips-content my-1"
        column
        >
        <template
          v-for="(item, index) in items"
          >
          <v-tooltip
            :key="index"
            max-width="40rem"
            top
            :color="chipsTooltipColor"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                class="ml-2 mr-0 my-1 pa-2 px-4"
                :color="$attrs.color"
                close
                v-bind="attrs"
                @click:close="onRemove(item)"
                v-on="on"
                >
                <span
                  class="chip-label"
                >
                  {{ item }}
                </span>
              </v-chip>
            </template>
             <span>{{ item }}</span>
          </v-tooltip>
        </template>
      </v-chip-group>
    </div>
  </v-input>
</template>

<script>
/**
 * @name formItemChips
 * @description form item component for horizontal-form
 * @version 1.0.0
 * @property {string} [btnText] - add button text
 * @property {string} [enableTooltip] - show tooltip icon
 * @property {string} [tooltipMessage] - tooltip message
 * @property {string} [tooltipBtnIcon] - tooltip icon
 * @property {string} [tooltipBtnText] - tooltip text
 * @property {string} [btnIcon] - add button icon
 * @property {string} [btnColor] - add button color
 * @property {boolean} [searchEnabled] - display options while user search
 * @property {boolean} [searchValueEnabled] - display combobox value in dropdown
 */
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
      required: false
    },
    btnText: {
      type: String,
      default: function () { return this.$t('components.formItemComboboxChips.add') },
      required: false
    },
    enableTooltip: {
      type: Boolean,
      default: false,
      required: false
    },
    tooltipMessage: {
      type: String,
      default: '',
      required: false
    },
    tooltipBtnIcon: {
      type: String,
      default: 'mdi-question-mark-circle',
      required: false
    },
    tooltipBtnText: {
      type: String,
      default: 'mdi-question-mark-circle',
      required: false
    },
    btnIcon: {
      type: String,
      default: 'mdi-plus',
      required: false
    },
    btnColor: {
      type: String,
      default: 'success',
      required: false
    },
    searchEnabled: {
      type: Boolean,
      default: false,
      required: false
    },
    chipsTooltipColor: {
      type: String,
      default: 'white black--text',
      required: false
    },
    searchValueEnabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
      search: null,
      searchedItem: null,
      inputValue: null
    }
  },
  computed: {
    error () {
      const rules = this.$attrs.rules || []
      const errors = rules.filter(rule => rule(this.value) !== true)
      const hasError = errors.length > 0
      const message = hasError ? errors[0](this.value) : ''
      return {
        hasError,
        message
      }
    },
    items () {
      return new Set(this.value)
    }
  },
  methods: {
    onAdd () {
      if (this.searchedItem) {
        const tempItems = new Set(this.value)
        tempItems.add(this.searchedItem)
        this.search = this.inputValue = this.searchedItem = null
        this.$emit('input', Array.from(tempItems))
      }
      this.$refs.searchInput.focus()
    },
    onRemove (option) {
      const tempItems = new Set(this.value)
      tempItems.delete(option)
      this.$emit('input', Array.from(tempItems))
    }
  },
  watch: {
    inputValue (val) {
      if (typeof val === 'object') {
        this.searchedItem = val ? val.text : ''
      } else {
        this.searchedItem = val
      }
      this.$emit('updateSearchInput', val)
    },
    search (val) {
      this.searchedItem = val
      this.$emit('updateSearchInput', val)
    }
  }
}
</script>

<style lang="scss">
.form-item-chips {
  .v-chip {
    &__content {
      .chip-label {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
