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

export const postCharacterThunk = character => {
  console.log('Character', character)
  return dispatch => {
    axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/api/character/create`,
        { character },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log('Post Character Thunk:', response)
        dispatch(postCharacter(response.data))
      })
  }
}

export const ADD_DESCRIPTION = 'ADD_DESCRIPTION'
export const ADD_STATS = 'ADD_STATS'
export const ADD_SKILLS = 'ADD_SKILLS'
export const ADD_EQUIPMENT = 'ADD_EQUIPMENT'

export function addDescription (description) {
  return {
    type: ADD_DESCRIPTION,
    payload: description
  }
}
export function addStats (stats) {
  return {
    type: ADD_STATS,
    payload: stats
  }
}
export function addSkills (skills) {
  return {
    type: ADD_SKILLS,
    payload: skills
  }
}
export function addEquipment (equipment) {
  console.log('EQUIPEMENT', equipment)
  return {
    type: ADD_EQUIPMENT,
    payload: equipment
  }
}
