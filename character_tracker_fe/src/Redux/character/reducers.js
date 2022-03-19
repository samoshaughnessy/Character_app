import {
  GET_CHARACTERS,
  POST_CHARACTER,
  ADD_DESCRIPTION,
  ADD_SKILLS,
  ADD_STATS,
  ADD_EQUIPMENT
} from './actions'

const initialState = {
  characters: [],
  characterDescription: [],
  characterStats: [],
  characterSkills: [],
  characterWeapons: []
}

export function characterReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        characterDescription: state.characterDescription,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        characters: action.payload
      }
    case POST_CHARACTER:
      return {
        characterDescription: state.characterDescription,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        characters: state.characters.concat([action.payload])
      }
    case ADD_DESCRIPTION:
      console.log(action.payload)
      console.log(state.characterDescription)
      return {
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription.concat([
          action.payload
        ])
      }
    case ADD_STATS:
      console.log(action.payload)
      console.log(state.characterStats)
      return {
        characters: state.characters,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription,
        characterStats: state.characterStats.concat([action.payload])
      }
    case ADD_SKILLS:
      return {
        characters: state.characters,
        characterStats: state.characterStats,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription,
        characterSkills: state.characterSkills.concat([action.payload])
      }
    case ADD_EQUIPMENT:
      return {
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterDescription: state.characterDescription,
        characterWeapons: state.characterWeapons.concat([action.payload])
      }
    default:
      return state
  }
}
