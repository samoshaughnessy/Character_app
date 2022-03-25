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
        // console.log('Get Character Thunk:', response)
        dispatch(getCharacters(response.data))
      })
  }
}

export const postCharacterThunk = character => {
  // console.log('Character', character)
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
  return {
    type: ADD_EQUIPMENT,
    payload: equipment
  }
}

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER'
export function setCurrentCharacter (character) {
  return {
    type: SET_CURRENT_CHARACTER,
    payload: character
  }
}

export const GET_CURRENT_SKILLS = 'GET_CURRENT_SKILLS'
export function getCurrentSkills (skills) {
  return {
    type: GET_CURRENT_SKILLS,
    payload: skills
  }
}

export const getCurrentSkillsThunk = characterId => {
  return dispatch => {
    axios
      .get(
        `${process.env.REACT_APP_API_SERVER}/api/character/skills/${characterId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log(('Get Skills Thunk:', response))
        dispatch(getCurrentSkills(response.data))
      })
  }
}

export const GET_SKILLS = 'GET_SKILLS'

export function getSkills (skills) {
  return {
    type: GET_SKILLS,
    payload: skills
  }
}

export const getSkillsThunk = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/character/skills`)
      .then(response => {
        console.log(('Get Skills Thunk:', response))
        dispatch(getSkills(response.data))
      })
  }
}

export const updateSkillsThunk = (characterId, skills) => {
  console.log(skills, characterId)
  return dispatch => {
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/character/skills/${characterId}`,
        { skills },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response => {
        console.log(('Get Skills Thunk:', response))
        // dispatch(getCurrentSkills(response.data))
      })
  }
}

export const updateCurrentStatsThunk = (characterId, stats, character) => {
  return dispatch => {
    console.log(character, 'character')
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/character/stats/${characterId}`,
        { stats },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response => {
        console.log(('update State', response))
        // dispatch(getCurrentSkills(response.data))
      })
  }
}

export const updateCharacterStatsThunk = (characterId, stats, character) => {
  return dispatch => {
    console.log(character, 'character')
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/character/statistics/${characterId}`,
        { stats },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response => {
        console.log(('update State', response))
        // dispatch(getCurrentSkills(response.data))
      })
  }
}
