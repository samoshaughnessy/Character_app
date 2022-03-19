import { Modal, Button } from 'react-bootstrap'
import MultiCard from './MultiCard'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEqupiment } from '../Redux/character/actions'

function CharacterEquipment (props) {
  const dispatch = useDispatch()
  const armour = useSelector(state => state.armouryStore.armour)
  const weapons = useSelector(state => state.armouryStore.weapons)

  const [selectedArmour, setSelectedArmour] = useState([])
  const [selectedWeapons, setSelectedWeapons] = useState([])

  useEffect(() => {
    console.log('loading')
  }, [armour, weapons])

  function select (e, itemInfo, type) {
    console.log(e.target)
    console.log(itemInfo)
    if (type === 'weapon') {
      console.log('WEAPON')
      setSelectedWeapons(selectedWeapons.concat(itemInfo))
    } else if (type === 'armour') {
      console.log('ARMOUR')
      setSelectedArmour(selectedArmour.concat(itemInfo))
    }
  }

  return (
    <Modal size='xl' show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Equipment</Modal.Header>
      <Modal.Body>
        <h2>Armour</h2>
        <MultiCard armour armourList={armour} select={select} />

        <h2>Weapons</h2>
        <MultiCard weapon weapons={weapons} select={select} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            props.next()
            dispatch(addEqupiment({ selectedArmour, selectedWeapons }))
            props.onHide()
          }}
        >
          Save Character
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterEquipment
