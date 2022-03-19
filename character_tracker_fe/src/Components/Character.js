// if not then make a character through various pages
// first character name description etc
// character stats - character skills - character equipment

//if they have characters show characters and a buttont to add a new character.

import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getCharacterThunk,
  postCharacterThunk
} from '../Redux/character/actions'
import CharacterDetails from './CharacterDetails'
import CharacterStats from './CharacterStats'
import CharacterSkills from './CharacterSkills'
import CharacterEquipment from './CharacterEquipment'
import { getArmouryThunk } from '../Redux/armoury/actions'

import { Button } from 'react-bootstrap'

export default function CharacterList () {
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showCharacterStats, setShowCharacterStats] = useState(false)
  const [showCharacterSkills, setShowCharacterSkills] = useState(false)
  const [showCharacterEquipment, setShowCharacterEquipment] = useState(false)

  const showDetails = () => setShowCharacterDetails(true)
  const stopShowDetails = () => setShowCharacterDetails(false)

  const showStats = () => setShowCharacterStats(true)
  const stopShowStats = () => setShowCharacterStats(false)

  const showSkills = () => setShowCharacterSkills(true)
  const stopShowSkills = () => setShowCharacterSkills(false)

  const showEquipment = () => setShowCharacterEquipment(true)
  const stopShowEquipment = () => setShowCharacterEquipment(false)

  const charactersFromRedux = useSelector(
    state => state.characterStore.characters
  )

  const dispatch = useDispatch()

  const stats = useSelector(state => state.characterStore.characterStats)
  const skills = useSelector(state => state.characterStore.characterSkills)
  const weapons = useSelector(state => state.characterStore.characterWeapons)
  const description = useSelector(
    state => state.characterStore.characterDescription
  )
  function createCharacter () {
    const character = { stats, skills, weapons, description }

    dispatch(postCharacterThunk(character))
  }

  useEffect(() => {
    dispatch(getCharacterThunk())
    dispatch(getArmouryThunk())
  }, [dispatch, weapons])

  return (
    <div>
      <h1>
        This is where we will render out the characters people have, a card with
        the character image
      </h1>

      <div>
        {charactersFromRedux && charactersFromRedux.length > 0 ? (
          charactersFromRedux.map(character => (
            <div key={character.id}>
              <p>{character.name}</p>
            </div>
          ))
        ) : (
          <>
            <Button variant='secondary' onClick={showDetails}>
              Make a Character
            </Button>
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
                createCharacter()
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
