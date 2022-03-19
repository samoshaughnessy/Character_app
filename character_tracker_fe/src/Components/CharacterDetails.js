import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import { useState } from 'react'

function CharacterDetails (props) {
  const [characterDetails, setCharacterDetails] = useState({
    name: '',
    background: '',
    backgroundEffect: '',
    image: ''
  })

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Characer Details</Modal.Header>
      <Modal.Body>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='characterName'>Character Name</InputGroup.Text>
          <FormControl
            placeholder='Character Name'
            aria-label='characterName'
            aria-describedby='characterName'
            value={characterDetails.name}
            onChange={e =>
              setCharacterDetails({
                ...characterDetails,
                name: e.target.value
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Character Background</InputGroup.Text>
          <FormControl
            as='textarea'
            aria-label='Character Description'
            placeholder='Character Background'
            value={characterDetails.background}
            onChange={e =>
              setCharacterDetails({
                ...characterDetails,
                background: e.target.value
              })
            }
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Character Background Effect</InputGroup.Text>
          <FormControl
            as='textarea'
            aria-label='Character Background  Effect'
            placeholder='Character Background Effects'
            value={characterDetails.backgroundEffect}
            onChange={e =>
              setCharacterDetails({
                ...characterDetails,
                backgroundEffect: e.target.value
              })
            }
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='imageURL'>Image URL</InputGroup.Text>
          <FormControl
            placeholder='Image URL 512x512 px'
            aria-label='imageURL'
            aria-describedby='imageURL'
            value={characterDetails.image}
            onChange={e =>
              setCharacterDetails({
                ...characterDetails,
                image: e.target.value
              })
            }
          />
        </InputGroup>
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

export default CharacterDetails
