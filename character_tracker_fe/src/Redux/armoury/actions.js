import axios from 'axios'

export const GET_ARMOURY = 'GET_ARMOURY'

export function getArmoury (everything) {
  return {
    type: GET_ARMOURY,
    payload: everything
  }
}

export const getArmouryThunk = () => {
  return dispatch => {
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury`)
      .then(response => {
        console.log(('Get Armoury Thunk:', response))
        dispatch(getArmoury(response.data))
      })
  }
}

export const GET_CURRENT_WEAPONS = 'GET_CURRENT_WEAPONS'
export const GET_CURRENT_ARMOUR = 'GET_CURRENT_ARMOUR'
export const GET_CURRENT_ITEMS = 'GET_CURRENT_ITEMS'
const token = localStorage.getItem('CTT')

export function getCurrentWeapons (weapons) {
  return {
    type: GET_CURRENT_WEAPONS,
    payload: weapons
  }
}

export function getCurrentArmour (armour) {
  return {
    type: GET_CURRENT_ARMOUR,
    payload: armour
  }
}

export function getCurrentItems (items) {
  return {
    type: GET_CURRENT_ITEMS,
    payload: items
  }
}

export const getCurrentWeaponsArmourThunk = characterId => {
  console.log('sending thunk request', characterId)
  return dispatch => {
    axios
      .get(
        `${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury/${characterId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log(('Get Armoury Thunk:', response.data))
        dispatch(getCurrentArmour(response.data.armour))
        dispatch(getCurrentWeapons(response.data.weapons))
        dispatch(getCurrentItems(response.data.items))
      })
  }
}

export const setCurrentItems = (characterId, items) => {
  return dispatch => {
    axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury/items/${characterId}`,
        { items },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log('Set Items Thunk:', response.data)
        dispatch(getCurrentWeaponsArmourThunk(characterId))
      })
  }
}

export const removeCurrentItems = (characterId, items) => {
  return dispatch => {
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury/items/${characterId}`,
        { items },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then(response => {
        console.log(('Set Items Thunk:', response.data))
        dispatch(getCurrentWeaponsArmourThunk(characterId))
      })
  }
}

export const updateWeaponsThunk = (characterId, weapons, character) => {
  return dispatch => {
    console.log(weapons, 'weapon')
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/weaponsarmour/armoury/new/${characterId}`,
        { weapons },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response => {
        console.log(('update State', response))
        dispatch(getCurrentWeaponsArmourThunk(characterId))
      })
  }
}
