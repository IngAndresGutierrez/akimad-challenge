/* import internal modules */
import { HANDLE_USER, HANDLE_SEARCH_USERS } from '../../types/types'

export const setUser = (user) => ({
  type: HANDLE_USER,
  payload: { user },
})

export const setSearchUsers = (searchUsers) => ({
  type: HANDLE_SEARCH_USERS,
  payload: { searchUsers },
})
