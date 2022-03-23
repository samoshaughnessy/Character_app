import {
  GET_ARMOURY,
  GET_CURRENT_ARMOUR,
  GET_CURRENT_ITEMS,
  GET_CURRENT_WEAPONS
} from './actions'

const initialState = {
  weapons: [],
  armour: [],
  items: [],
  currentArmour: [],
  currentWeapons: [],
  currentItems: []
}

export function armouryReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ARMOURY:
      return {
        weapons: action.payload.weapons,
        armour: action.payload.armour,
        items: action.payload.items
      }
    case GET_CURRENT_ARMOUR:
      return {
        weapons: state.weapons,
        armour: state.armour,
        items: state.items,
        currentArmour: action.payload,
        currentWeapons: state.currentWeapons,
        currentItems: state.currentItems
      }
    case GET_CURRENT_WEAPONS:
      return {
        weapons: state.weapons,
        armour: state.armour,
        items: state.items,
        currentArmour: state.currentArmour,
        currentWeapons: action.payload,
        currentItems: state.currentItems
      }
    case GET_CURRENT_ITEMS:
      return {
        weapons: state.weapons,
        armour: state.armour,
        items: state.items,
        currentArmour: state.currentArmour,
        currentWeapons: state.currentWeapons,
        currentItems: action.payload
      }
    default:
      return state
  }
}
