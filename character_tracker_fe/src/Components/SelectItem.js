import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import MultiCard from './MultiCard'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentItems, removeCurrentItems } from '../Redux/armoury/actions'
import DisplayCard from './DisplayCard'

function SelectItem (props) {
  const dispatch = useDispatch()
  const [selectedItems, setSelectedItems] = useState([])

  function selectItems (e, itemInfo, type) {
    console.log(e.target)
    console.log('HEREHERHERHEHR', itemInfo)
    console.log(props)
    Array.isArray(itemInfo)
      ? setSelectedItems(selectedItems.concat(itemInfo[0]))
      : setSelectedItems(selectedItems.concat(itemInfo))
  }

  return (
    <Modal fullscreen={true} show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Items</Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className='bg-warning'>
              <MultiCard item itemList={props.items} select={selectItems} />
            </Col>
            <Col className='bg-secondary'>
              <MultiCard item itemList={selectedItems} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='danger'
          onClick={() => {
            if (props.remove) {
              console.log('removing')
              dispatch(removeCurrentItems(props.character.id, selectedItems))
            } else {
              console.log('adding')
              dispatch(setCurrentItems(props.character.id, selectedItems))
            }
            setSelectedItems([])

            props.onHide()
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectItem
