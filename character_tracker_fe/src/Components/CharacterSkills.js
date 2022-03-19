import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input2'
import { useState } from 'react'

function CharacterSkills (props) {
  const [characterSkills, setCharacterSkills] = useState({
    points: 18,
    swordPlay: 0,
    bowUse: 0,
    crossbowProficency: 0,
    spearPlay: 0,
    axePlay: 0,
    sheildPlay: 0,
    persuade: 0,
    intimidate: 0,
    awareness: 0,
    search: 0,
    healing: 0,
    craft: 0,
    tactics: 0,
    hunt: 0
  })

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Skills</Modal.Header>
      <Modal.Body>
        <InputGroup.Text>Experiance Points Left:</InputGroup.Text>
        <h2>{characterSkills.points}</h2>
        <InputGroup.Text>Awareness</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.awareness}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              awareness: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Craft</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.craft}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              craft: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Intimidate</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.intimidate}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              intimidate: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Hunt</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.hunt}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              hunt: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Healing</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.healing}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              healing: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Search</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.search}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              search: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Persuade</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.persuade}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              persuade: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Tactics</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.tactics}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              tactics: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Axe Play</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.axePlay}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              axePlay: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Sword Play</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.swordPlay}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              swordPlay: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Spear Play</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.spearPlay}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              spearPlay: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Bow Use</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.bowUse}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              bowUse: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Crossbow Proficency</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.crossbowProficency}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              crossbowProficency: value,
              experiance: characterSkills.points - 1
            })
          }
        />
        <InputGroup.Text>Sheild Play</InputGroup.Text>
        <NumericInput
          min={0}
          max={5}
          value={characterSkills.sheildPlay}
          onChange={value =>
            setCharacterSkills({
              ...characterSkills,
              sheildPlay: value,
              experiance: characterSkills.points - 1
            })
          }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            props.next()
            props.onHide()
          }}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterSkills
