import { GET_CHARACTERS, POST_CHARACTER } from './actions'

const initialState = {
  characters: []
}

export function characterReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        characters: action.payload
      }
    case POST_CHARACTER:
      return {
        characters: state.characters.concat([action.payload])
      }
    default:
      return state
  }
}
