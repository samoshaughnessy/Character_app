// if not then make a character through various pages
// first character name description etc
// character stats - character skills - character equipment

//if they have characters show characters and a buttont to add a new character.

import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {
  getCharacterThunk,
  postCharacterThunk
} from '../Redux/character/actions'
import CharacterDetails from './CharacterDetails'
import CharacterStats from './CharacterStats'
import CharacterSkills from './CharacterSkills'
import CharacterEquipment from './CharacterEquipment'
import { getArmouryThunk } from '../Redux/armoury/actions'
import CharacterCard from './CharacterCard'

import { Button } from 'react-bootstrap'

// Make a modal character screen to display the character info of the character selected
// in thie modal be able to update everything

export default function CharacterList () {
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)
  const [showCharacterStats, setShowCharacterStats] = useState(false)
  const [showCharacterSkills, setShowCharacterSkills] = useState(false)
  const [showCharacterEquipment, setShowCharacterEquipment] = useState(false)
  const [sendChar, setSendChar] = useState(false)
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

  function select (e, itemInfo, type) {
    console.log(e.target)
    console.log(itemInfo)
  }

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
  // this component doesnt get the newest version of the redux store before sending
  useEffect(() => {
    dispatch(getCharacterThunk())
    dispatch(getArmouryThunk())

    if (sendChar) {
      console.log('Redux', weapons, stats, description, skills)
      console.log('starting')
      createCharacter()
      setSendChar(false)
    }

    console.log('useeffect', weapons, stats, description, skills)
  }, [dispatch, showCharacterEquipment])

  return (
    <div>
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
      <h1>
        This is where we will render out the characters people have, a card with
        the character image
      </h1>

      <Button variant='secondary' onClick={showDetails}>
        Make a Character
      </Button>
      <br />
      <div className='flexCentered'>
        {charactersFromRedux && charactersFromRedux.length > 0 ? (
          charactersFromRedux.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              select={select}
            />
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
                setSendChar(true)
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}

/**
 *
 *
 *
 * Bugg
 * The application crashes when we cannot send full list
 */
