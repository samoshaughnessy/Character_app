import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import MultiCard from './MultiCard'

function SelectItem (props) {
  console.log(props)
  return (
    <Modal fullscreen={true} show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Character Items</Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className='bg-warning'>
              <MultiCard item itemList={props.items} />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => props.onHide()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectItem

// each multicard for items should contain input amount
// Make it so you can select items that you want to pick
// list out items and amounts
// send to redux and backend
