import { Modal, InputGroup, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input2'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addStats } from '../Redux/character/actions'

function CharacterStats (props) {
  const dispatch = useDispatch()

  const [characterStats, setCharacterStats] = useState({
    experiance: 30,
    strength: 1,
    dexterity: 1,
    concentration: 1,
    intelligence: 1,
    concentration: 1,
    charisma: 1,
    hp: 1,
    stamina: 1
  })

  useEffect(() => {
    setCharacterStats({
      ...characterStats,
      hp: Math.floor(
        (characterStats.strength * 2 + characterStats.dexterity) * 0.8
      ),
      stamina: characterStats.strength * 2 + characterStats.concentration
    })
  }, [
    characterStats.strength,
    characterStats.dexterity,
    characterStats.concentration
  ])

  return (
    <Modal size='lg' show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Charatcer Stats</Modal.Header>
      <Modal.Body>
        <InputGroup.Text>Experiance Points Left:</InputGroup.Text>
        <h2 className='centered'>{characterStats.experiance}</h2>
        <div className='flexCentered'>
          <div className='m-1'>
            <InputGroup.Text>Strength</InputGroup.Text>
            <NumericInput
              disabled={characterStats.experiance <= 0}
              min={0}
              max={10}
              value={characterStats.strength}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  strength: value,
                  experiance: characterStats.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Dexterity</InputGroup.Text>
            <NumericInput
              disabled={characterStats.experiance <= 0}
              min={0}
              max={10}
              value={characterStats.dexterity}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  dexterity: value,
                  experiance: characterStats.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Intelligence</InputGroup.Text>
            <NumericInput
              disabled={characterStats.experiance <= 0}
              min={0}
              max={10}
              value={characterStats.intelligence}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  intelligence: value,
                  experiance: characterStats.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Concentration</InputGroup.Text>
            <NumericInput
              disabled={characterStats.experiance <= 0}
              min={0}
              max={10}
              value={characterStats.concentration}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  concentration: value,
                  experiance: characterStats.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Charisma</InputGroup.Text>
            <NumericInput
              disabled={characterStats.experiance <= 0}
              min={0}
              max={10}
              value={characterStats.charisma}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  charisma: value,
                  experiance: characterStats.experiance - 1
                })
              }
            />
          </div>
        </div>
        <InputGroup.Text>HP</InputGroup.Text>
        <h2 className='centered'>{characterStats.hp}</h2>
        <InputGroup.Text>Stamina</InputGroup.Text>
        <h2 className='centered'>{characterStats.stamina}</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            dispatch(addStats(characterStats))
            setCharacterStats({
              experiance: 30,
              strength: 1,
              dexterity: 1,
              concentration: 1,
              intelligence: 1,
              concentration: 1,
              charisma: 1,
              hp: 1,
              stamina: 1
            })
            props.onHide()
            props.next()
          }}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterStats
