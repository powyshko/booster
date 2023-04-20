<template>
  <table class="base-table">
    <thead class="base-table__header">
      <tr>
        <slot name="header">
          <template v-for="(header, headerIndex) in headers">
            <th :key="headerIndex">
              <div
                class="base-table__header-cell"
                @click="selectSort(header.key)"
              >
                <div>{{ header.text }}</div>

                <div
                  v-if="currentSortKey === header.key && header.sortable"
                  :class="{ 'base-table__header-icon-reversed': isSortIconReversed }"
                >
                  ▼
                </div>
              </div>
            </th>
          </template>
        </slot>
      </tr>
    </thead>

    <tbody class="base-table__body">
      <template v-for="(item, itemIndex) in items">
        <tr :key="itemIndex">
          <slot name="item" :item="item"></slot>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',

  props: {
    headers: { type: Array, defalult: () => ([]) },
    items: { type: Array, default: () => ([]) },
    sortDesc: { type: String, default: 'ASC' },
    currentSortKey: { type: String, default: '' }
  },

  computed: {
    isSortIconReversed() {
      return this.sortDesc === 'DESC'
    }
  },

  methods: {
    selectSort(sortKey) {
      this.$emit('update:sort-desc', this.sortDesc === 'DESC' ? 'ASC' : 'DESC')

      this.$emit('sorted', sortKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-table {
  width: 100%;
	margin-bottom: 20px;
  margin-top: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;

  th {
    font-weight: bold;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
    cursor: pointer;
  }

  td {
    border: 1px solid #dddddd;
	  padding: 5px;
  }

  &__header-cell {
    display: flex;
    gap: 5px;
  }

  &__header-icon-reversed {
    transform: rotate(180deg);
  }
}
</style>