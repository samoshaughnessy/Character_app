import {
  GET_CHARACTERS,
  POST_CHARACTER,
  ADD_DESCRIPTION,
  ADD_SKILLS,
  ADD_STATS,
  ADD_EQUIPMENT,
  SET_CURRENT_CHARACTER,
  GET_SKILLS,
  GET_CURRENT_SKILLS
} from './actions'

const initialState = {
  characters: [],
  characterDescription: [],
  characterStats: [],
  characterSkills: [],
  characterWeapons: [],
  currentCharacter: [],
  skills: []
}

// replace the whole thing
export function characterReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        skills: state.skills,
        characterDescription: state.characterDescription,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        currentCharacter: state.currentCharacter,
        characters: action.payload
      }
    case POST_CHARACTER:
      return {
        skills: state.skills,
        characterDescription: state.characterDescription,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        currentCharacter: state.currentCharacter,
        characters: state.characters.concat([action.payload])
      }
    case ADD_DESCRIPTION:
      return {
        skills: state.skills,
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        currentCharacter: state.currentCharacter,
        characterDescription: action.payload
      }
    case ADD_STATS:
      return {
        skills: state.skills,
        characters: state.characters,
        characterSkills: state.characterSkills,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription,
        currentCharacter: state.currentCharacter,
        characterStats: action.payload
      }
    case ADD_SKILLS:
      return {
        skills: state.skills,
        characters: state.characters,
        characterStats: state.characterStats,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription,
        currentCharacter: state.currentCharacter,
        characterSkills: action.payload
      }
    case ADD_EQUIPMENT:
      return {
        skills: state.skills,
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterDescription: state.characterDescription,
        currentCharacter: state.currentCharacter,
        characterWeapons: action.payload
      }
    case SET_CURRENT_CHARACTER:
      return {
        skills: state.skills,
        currentCharacter: action.payload,
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterDescription: state.characterDescription,
        characterWeapons: state.characterWeapons
      }
    case GET_SKILLS:
      return {
        skills: action.payload,
        currentCharacter: state.currentCharacter,
        characters: state.characters,
        characterStats: state.characterStats,
        characterSkills: state.characterSkills,
        characterDescription: state.characterDescription,
        characterWeapons: state.characterWeapons
      }
    case GET_CURRENT_SKILLS:
      return {
        skills: state.skills,
        characters: state.characters,
        characterStats: state.characterStats,
        characterWeapons: state.characterWeapons,
        characterDescription: state.characterDescription,
        currentCharacter: state.currentCharacter,
        characterSkills: action.payload
      }
    default:
      return state
  }
}
