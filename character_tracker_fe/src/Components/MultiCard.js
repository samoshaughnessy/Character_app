import { Card } from 'react-bootstrap'

function MultiCard (props) {
  return (
    <>
      <div className='flexCentered'>
        {props.weapon && props.weapons.length > 0
          ? props.weapons.map(weapon => (
              <Card
                onClick={e => props.select(e, weapon, 'weapon')}
                key={weapon.id}
                className='customCard m-2'
              >
                <Card.Img className='image' variant='top' src={weapon.image} />
                <Card.Body>
                  <Card.Title>{weapon.name}</Card.Title>
                  <Card.Title>Damage</Card.Title>
                  <Card.Text>{weapon.damage}</Card.Text>
                  <Card.Title>Critical</Card.Title>
                  <Card.Text>{weapon.critical}</Card.Text>
                  <Card.Title>Penetration</Card.Title>
                  <Card.Text>{weapon.penetration}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{weapon.encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{weapon.price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
      <div className='flexCentered'>
        {props.armour && props.armourList.length > 0
          ? props.armourList.map(armour => (
              <Card
                onClick={e => props.select(e, armour, 'armour')}
                key={armour.id}
                className='customCard m-2'
              >
                <Card.Img className='image' variant='top' src={armour.image} />
                <Card.Body>
                  <Card.Title>{armour.name}</Card.Title>
                  <Card.Title>Rating</Card.Title>
                  <Card.Text>{armour.rating}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{armour.encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{armour.price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
      <div className='flexCentered'>
        {props.item && props.itemList.length > 0
          ? props.itemList.map(item => (
              <Card key={item.id} className='customCard m-2'>
                <Card.Img className='image' variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.description}</Card.Title>
                  <Card.Title>Target Stat</Card.Title>
                  <Card.Text>{item.target_stat}</Card.Text>
                  <Card.Title>Amount</Card.Title>
                  <Card.Text>{item.amount}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{item.encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
    </>
  )
}

export default MultiCard
