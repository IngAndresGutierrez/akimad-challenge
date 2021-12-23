import axios from 'axios'

const BASE_URL = 'https://api.github.com/search/users'

export const getUsersSearch = (query) => {
  return axios.get(`${BASE_URL}?q=${query}`)
}
