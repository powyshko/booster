// Controllers
import UsersController from '@/controllers/UsersController';

const state = {
  users: []
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  }
}

const actions = {
  async GET_USERS({ commit }) {
    const { data } = await UsersController.getUsers()

    commit('SET_USERS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}