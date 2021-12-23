/* import internal modules */
import { HANDLE_USER, HANDLE_SEARCH_USERS } from '../../types/types'

const initialState = {
  user: {},
  searchUsers: [],
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, { user: action.payload.user })

    case HANDLE_SEARCH_USERS:
      return Object.assign({}, state, {
        searchUsers: action.payload.searchUsers,
      })

    default:
      return state
  }
}

export default UserReducer
