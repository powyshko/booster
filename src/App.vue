<template>
  <div id="app">
    <base-input
      v-model="search"
      label="Поиск"
    />

    <users-table
      :users="searchDataUsers"
      :sort-desc.sync="sortDesc"
      :current-sort-key="currentSortKey"
      @sorted="setSortKey"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

// Components
import UsersTable from '@/components/Users/UsersTable'
import BaseInput from '@/components/Common/BaseInput'

export default {
  name: 'App',

  components: { UsersTable, BaseInput },

  data() {
    return {
      sortDesc: 'ASC',
      currentSortKey: 'id',
      search: ''
    }
  },

  computed: {
    ...mapState('users', [ 'users' ]),

    normalizedDataUsers() {
      return this.users.map(user => {
        const { id, username, email, address, phone } = user

        return {
          id,
          username,
          email,
          phone,
          city: address.city
        }
      })
    },

    searchDataUsers() {
      const search = this.search.toLowerCase()

      return this.normalizedDataUsers.filter(user => {
        return Object.values(user).some(userItem => userItem.toString().toLowerCase().includes(search))
      })
    }
  },

  watch: {
    sortDesc() {
      this.sortedUsers()
    }
  },

  methods: {
    ...mapActions('users', [ 'GET_USERS' ]),

    setSortKey(key) {
      this.currentSortKey = key
    },

    sortedUsers() {
      return this.searchDataUsers.sort((userA, userB) => {
        let mod = 1;

        if (this.sortDesc === 'DESC') mod = -1;

        if (userA[this.currentSortKey] < userB[this.currentSortKey]) {
          return -1 * mod;
        }

        if (userA[this.currentSortKey] > userB[this.currentSortKey]) {
          return 1 * mod;
        }

        return 0
      })
    }
  },

  async created() {
    await this.GET_USERS()
  }
}
</script>

<style lang="scss">
#app {
  padding: 30px;
}
</style>
