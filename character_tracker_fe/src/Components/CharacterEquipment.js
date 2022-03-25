import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import MultiCard from './MultiCard'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEquipment } from '../Redux/character/actions'
import { updateWeaponsThunk } from '../Redux/armoury/actions'

function CharacterEquipment (props) {
  const dispatch = useDispatch()
  const armour = useSelector(state => state.armouryStore.armour)
  const weapons = useSelector(state => state.armouryStore.weapons)

  const [selectedArmour, setSelectedArmour] = useState([])
  const [selectedWeapons, setSelectedWeapons] = useState([])

  function selectWeaponArmour (e, itemInfo, type) {
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
    <Modal fullscreen={true} show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Equipment</Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className='bg-warning'>
              <h2>Armour</h2>
              <MultiCard
                armour
                armourList={armour}
                select={selectWeaponArmour}
              />
              <h2>Weapons</h2>
              <MultiCard weapon weapons={weapons} select={selectWeaponArmour} />
            </Col>
            <Col className='bg-secondary'>
              <h3>Chosen armourments</h3>
              <h4>Armour</h4>
              <MultiCard armour armourList={selectedArmour} />
              <h4>Weapons</h4>
              <MultiCard weapon weapons={selectedWeapons} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            dispatch(addEquipment({ selectedArmour, selectedWeapons }))
            props.next()
            props.onHide()
            dispatch(
              updateWeaponsThunk(props.currentCharacter.id, {
                selectedArmour,
                selectedWeapons
              })
            )
            setSelectedArmour([])
            setSelectedWeapons([])
          }}
        >
          Save Character
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterEquipment
