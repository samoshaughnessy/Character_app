// Add in HP and Stamina in further iterations
import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input2'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateCurrentStatsThunk,
  setCurrentCharacter
} from '../Redux/character/actions'

function UpdateCurrentStats (props) {
  const dispatch = useDispatch()

  const [characterStats, setCharacterStats] = useState({
    gold: props.currentCharacter.gold,
    silver: props.currentCharacter.silver,
    experience: props.currentCharacter.experience_points
  })

  useEffect(() => {}, [])

  return (
    <Modal size='lg' show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Charatcer Stats</Modal.Header>
      <Modal.Body>
        <div className='flexCentered'>
          <div className='m-1'>
            <InputGroup.Text>Experiance</InputGroup.Text>
            <NumericInput
              min={0}
              max={100}
              value={characterStats.experience}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  experience: value
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Gold</InputGroup.Text>
            <NumericInput
              min={0}
              max={1000}
              value={characterStats.gold}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  gold: value
                })
              }
            />
          </div>
          <div className='m-1'>
            <InputGroup.Text>Silver</InputGroup.Text>
            <NumericInput
              min={0}
              max={10000}
              value={characterStats.silver}
              onChange={value =>
                setCharacterStats({
                  ...characterStats,
                  silver: value
                })
              }
            />
          </div>
        </div>{' '}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            props.onHide()
            const stats = {
              gold: characterStats.gold,
              silver: characterStats.silver,
              experience: characterStats.experience
            }
            dispatch(
              updateCurrentStatsThunk(
                props.currentCharacter.id,
                stats,
                props.currentCharacter
              )
            )

            let character = {
              ...props.currentCharacter,
              gold: characterStats.gold,
              silver: characterStats.silver,
              experience_points: characterStats.experience
            }

            console.log(character)

            dispatch(setCurrentCharacter(character))
          }}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateCurrentStats
