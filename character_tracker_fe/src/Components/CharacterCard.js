import { Card } from 'react-bootstrap'

function CharacterCard (props) {
  return (
    <Card
      onClick={e => {
        props.select(e, props.character, 'character')
      }}
      className='customCard m-2'
    >
      <Card.Title>{props.character.name}</Card.Title>
      <Card.Body>
        <Card.Img className='image' variant='top' src={props.character.image} />
        <Card.Title>{props.character.background}</Card.Title>
        <Card.Title>HP: {props.character.hp}</Card.Title>
        <Card.Title>Stamina: {props.character.stamina}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CharacterCard
