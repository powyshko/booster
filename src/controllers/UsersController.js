import axios from 'axios'

export default class UsersController {
  static getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users')
  }
}