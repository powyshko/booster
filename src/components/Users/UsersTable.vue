<template>
  <base-table
    :headers="headers"
    :items="users"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #item="{ item: users }">
      <td>{{ users.id }}</td>

      <td>{{ users.username }}</td>

      <td>{{ users.email }}</td>

      <td>{{ users.phone }}</td>

      <td>{{ users.city }}</td>
    </template>
  </base-table>
</template>

<script>
// Components
import BaseTable from '@/components/Common/BaseTable'

export default {
  name: 'UsersTable',

  components: {
    BaseTable
  },

  props: {
    users: { type: Array, default: () => ([]) }
  },

  data() {
    return {
      headers: [
        {
          text: 'ID',
          key: 'id',
          sortable: true
        },
        {
          text: 'Username',
          key: 'username',
          sortable: true
        },
        {
          text: 'Email',
          key: 'email',
          sortable: true
        },
        {
          text: 'Телефон',
          key: 'phone',
          sortable: true
        },
        {
          text: 'City',
          key: 'city',
          sortable: true
        }
      ]
    }
  }
}
</script>