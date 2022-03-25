import { Modal, InputGroup, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input2'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  updateSkillsThunk,
  getCurrentSkillsThunk
} from '../Redux/character/actions'

function CharacterSkills (props) {
  console.log('PROPS Skills', props)

  const dispatch = useDispatch()

  const [characterSkills, setCharacterSkills] = useState({
    experiance: props.currentCharacter.experience_points,
    swordPlay:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[0].skill_level
        : null,
    bowUse:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[1].skill_level
        : null,
    crossbowProficency:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[2].skill_level
        : null,
    spearPlay:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[3].skill_level
        : null,
    axePlay:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[4].skill_level
        : null,
    sheildPlay:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[5].skill_level
        : null,
    persuade:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[6].skill_level
        : null,
    intimidate:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[7].skill_level
        : null,
    awareness:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[8].skill_level
        : null,
    search:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[9].skill_level
        : null,
    healing:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[10].skill_level
        : null,
    craft:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[11].skill_level
        : null,
    tactics:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[12].skill_level
        : null,
    hunt:
      props.currentSkills && props.currentSkills.length > 0
        ? props.currentSkills[13].skill_level
        : null
  })

  return (
    <Modal size='xl' show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        Character Skills, you can only increment here
      </Modal.Header>
      <Modal.Body>
        <InputGroup.Text>Experiance Points Left:</InputGroup.Text>
        <h3 className='centered'>{characterSkills.experiance}</h3>
        <div className='flexCentered'>
          <div className='m-1'>
            <InputGroup.Text>Awareness</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.awareness}
              max={5}
              value={characterSkills.awareness}
              onChange={value => {
                if (characterSkills.experiance <= 0) {
                  console.log('no experiance left')
                } else {
                  setCharacterSkills({
                    ...characterSkills,
                    awareness: value,
                    experiance: characterSkills.experiance - 1
                  })
                }
              }}
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Craft</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.craft}
              max={5}
              value={characterSkills.craft}
              onChange={value => {
                if (characterSkills.experiance <= 0) {
                  console.log('no experiance left')
                } else {
                  setCharacterSkills({
                    ...characterSkills,
                    craft: value,
                    experiance: characterSkills.experiance - 1
                  })
                }
              }}
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Intimidate</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.intimidate}
              max={5}
              value={characterSkills.intimidate}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  intimidate: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Hunt</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.hunt}
              max={5}
              value={characterSkills.hunt}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  hunt: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Healing</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.healing}
              max={5}
              value={characterSkills.healing}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  healing: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Search</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.search}
              max={5}
              value={characterSkills.search}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  search: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Persuade</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.persuade}
              max={5}
              value={characterSkills.persuade}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  persuade: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Tactics</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.tactics}
              max={5}
              value={characterSkills.tactics}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  tactics: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Axe Play</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.axePlay}
              max={5}
              value={characterSkills.axePlay}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  axePlay: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Sword Play</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.swordPlay}
              max={5}
              value={characterSkills.swordPlay}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  swordPlay: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Spear Play</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.spearPlay}
              max={5}
              value={characterSkills.spearPlay}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  spearPlay: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Bow Use</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.bowUse}
              max={5}
              value={characterSkills.bowUse}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  bowUse: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Crossbow Proficency</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.crossbowProficency}
              max={5}
              value={characterSkills.crossbowProficency}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  crossbowProficency: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Sheild Play</InputGroup.Text>
            <NumericInput
              disabled={characterSkills.experiance <= 0}
              min={characterSkills.sheildPlay}
              max={5}
              value={characterSkills.sheildPlay}
              onChange={value =>
                setCharacterSkills({
                  ...characterSkills,
                  sheildPlay: value,
                  experiance: characterSkills.experiance - 1
                })
              }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            dispatch(
              updateSkillsThunk(
                props.currentCharacter.id,
                characterSkills,
                props.currentCharacter
              )
            )
            props.onHide()
            dispatch(getCurrentSkillsThunk(props.currentCharacter.id))
          }}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterSkills

//https://github.com/himelbrand/react-native-numeric-input#advanced-usage
// refactor page to make it easier to maintain
