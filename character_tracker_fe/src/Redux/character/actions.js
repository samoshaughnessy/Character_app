import axios from 'axios'

export const GET_CHARACTERS = 'GET_CHARACTERS'
export const POST_CHARACTER = 'POST_CHARACTER'
//
//export const UPDATE_CHARACTERS = 'UPDATE_CHARACTERS'
// export const DELETE_CHARACTER = "DELETE_CHARACTER"

export function getCharacters (characters) {
  return {
    type: GET_CHARACTERS,
    payload: characters
  }
}

export function postCharacter (characters) {
  return {
    type: POST_CHARACTER,
    payload: characters
  }
}

const token = localStorage.getItem('CTT')

export const getCharacterThunk = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/character/all`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log('Get Character Thunk:', response)
        dispatch(getCharacters(response.data))
      })
  }
}

export const postCharacterThunk = () => {
  return dispatch => {
    axios
      .post(`${process.env.REACT_APP_API_SERVER}/api/character/create`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log('Post Character Thunk:', response)
        dispatch(postCharacter(response.data))
      })
  }
}
