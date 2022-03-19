import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input2'
import { useState, useEffect } from 'react'

function CharacterStats (props) {
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
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Charatcer Stats</Modal.Header>
      <Modal.Body>
        <InputGroup.Text>Experiance Points Left:</InputGroup.Text>
        <h2>{characterStats.experiance}</h2>
        <InputGroup.Text>Strength</InputGroup.Text>
        <NumericInput
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

        <InputGroup.Text>Dexterity</InputGroup.Text>
        <NumericInput
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

        <InputGroup.Text>Intelligence</InputGroup.Text>
        <NumericInput
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

        <InputGroup.Text>Concentration</InputGroup.Text>
        <NumericInput
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

        <InputGroup.Text>Charisma</InputGroup.Text>
        <NumericInput
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

        <InputGroup.Text>HP</InputGroup.Text>
        <h2>{characterStats.hp}</h2>
        <InputGroup.Text>Stamina</InputGroup.Text>
        <h2>{characterStats.stamina}</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
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
