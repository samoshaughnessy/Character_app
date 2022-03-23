import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {
  getCharacterThunk,
  setCurrentCharacter,
  postCharacterThunk,
  getSkillsThunk,
  getCurrentSkillsThunk
} from '../Redux/character/actions'
import CharacterDetails from './CharacterDetails'
import CharacterStats from './CharacterStats'
import CharacterSkills from './CharacterSkills'
import CharacterEquipment from './CharacterEquipment'
import {
  getArmouryThunk,
  getCurrentWeaponsArmourThunk
} from '../Redux/armoury/actions'
import CharacterCard from './CharacterCard'
import { Button } from 'react-bootstrap'
import CurrentCharacter from './CurrentCharacter'

export default function CharacterList () {
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showCharacterStats, setShowCharacterStats] = useState(false)
  const [showCharacterSkills, setShowCharacterSkills] = useState(false)
  const [showCharacterEquipment, setShowCharacterEquipment] = useState(false)
  const [sendChar, setSendChar] = useState(false)

  const [selectedCharacter, setShowSelectedCharacter] = useState(false)

  const stats = useSelector(state => state.characterStore.characterStats)
  const skills = useSelector(state => state.characterStore.characterSkills)
  const weapons = useSelector(state => state.characterStore.characterWeapons)
  const description = useSelector(
    state => state.characterStore.characterDescription
  )

  function createCharacter () {
    console.log(stats, skills, weapons, description)
    const character = { stats, skills, weapons, description }
    console.log('ending')
    dispatch(postCharacterThunk(character))
  }

  function characterSelect (e, characterInfo, type) {
    console.log(e.target)
    console.log(characterInfo)
    console.log(type)
    if (type === 'character') {
      console.log('sending request')
      dispatch(getCurrentWeaponsArmourThunk(characterInfo.id))
      dispatch(setCurrentCharacter(characterInfo))
      dispatch(getCurrentSkillsThunk(characterInfo.id))
      showSelectedCharacter()
    }
  }

  const showSelectedCharacter = () => setShowSelectedCharacter(true)
  const stopShowSelectedCharacter = () => setShowSelectedCharacter(false)

  const showDetails = () => setShowCharacterDetails(true)
  const stopShowDetails = () => setShowCharacterDetails(false)

  const showStats = () => setShowCharacterStats(true)
  const stopShowStats = () => setShowCharacterStats(false)

  const showSkills = () => setShowCharacterSkills(true)
  const stopShowSkills = () => setShowCharacterSkills(false)

  const showEquipment = () => setShowCharacterEquipment(true)
  const stopShowEquipment = () => {
    setShowCharacterEquipment(false)
  }

  const charactersFromRedux = useSelector(
    state => state.characterStore.characters
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharacterThunk())
    dispatch(getArmouryThunk())
    dispatch(getSkillsThunk())
    if (sendChar) {
      console.log('Redux', weapons, stats, description, skills)
      console.log('starting')
      createCharacter()
      setSendChar(false)
    }
  }, [dispatch, showCharacterEquipment])

  return (
    <>
      <div className='bg-dark'>
        <CharacterDetails
          show={showCharacterDetails}
          onHide={stopShowDetails}
          next={showStats}
        />
        <CharacterStats
          show={showCharacterStats}
          onHide={stopShowStats}
          next={showSkills}
        />
        <CharacterSkills
          show={showCharacterSkills}
          onHide={stopShowSkills}
          next={showEquipment}
        />
        <CharacterEquipment
          show={showCharacterEquipment}
          onHide={stopShowEquipment}
          next={() => {
            stopShowEquipment()
            setSendChar(true)
          }}
        />
        <CurrentCharacter
          show={selectedCharacter}
          onHide={stopShowSelectedCharacter}
        />
        <h1 className='text-success'>Characters</h1>

        <Button variant='secondary' onClick={showDetails}>
          Make a Character
        </Button>
        <br />
        <div className='flexCentered'>
          {charactersFromRedux && charactersFromRedux.length > 0 ? (
            charactersFromRedux.map(character => {
              console.log(character)
              character.type = 'character'
              return (
                <CharacterCard
                  key={character.id}
                  character={character}
                  select={characterSelect}
                />
              )
            })
          ) : (
            <>
              <h3 className='text-danger'>Please make a character</h3>
            </>
          )}
        </div>
      </div>
    </>
  )
}
