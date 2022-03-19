import { GET_ARMOURY } from './actions'

const initialState = {
  weapons: [],
  armour: []
}

export function armouryReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ARMOURY:
      return {
        weapons: action.payload.weapons,
        armour: action.payload.armour
      }
    default:
      return state
  }
}
