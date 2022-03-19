import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
function CharacterEquipment (props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Equipment</Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close{' '}
        </Button>
        <Button
          variant='secondary'
          onClick={() => {
            props.next()
          }}
        >
          Save Character
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CharacterEquipment
