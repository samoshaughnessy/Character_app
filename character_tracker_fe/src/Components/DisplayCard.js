import { Card } from 'react-bootstrap'

function DisplayCard (props) {
  console.log(props)
  return (
    <>
      <div className='flexCentered'>
        {props.weapon && props.weapons.length > 0
          ? props.weapons.map(weapon => (
              <Card
                onClick={e => {
                  props.select(e, weapon, 'weapon')
                }}
                key={weapon[0].id}
                className='customCard m-2'
              >
                <Card.Img
                  className='image'
                  variant='top'
                  src={weapon[0].image}
                />
                <Card.Body>
                  <Card.Title>{weapon[0].name}</Card.Title>
                  <Card.Title>Damage</Card.Title>
                  <Card.Text>{weapon[0].damage}</Card.Text>
                  <Card.Title>Critical</Card.Title>
                  <Card.Text>{weapon[0].critical}</Card.Text>
                  <Card.Title>Penetration</Card.Title>
                  <Card.Text>{weapon[0].penetration}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{weapon[0].encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{weapon[0].price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
      <div className='flexCentered'>
        {props.armour && props.armourList.length > 0
          ? props.armourList.map(armour => (
              <Card
                onClick={e => {
                  props.select(e, armour, 'armour')
                }}
                key={armour[0].id}
                className='customCard m-2'
              >
                <Card.Img
                  className='image'
                  variant='top'
                  src={armour[0].image}
                />
                <Card.Body>
                  <Card.Title>{armour[0].name}</Card.Title>
                  <Card.Title>Rating</Card.Title>
                  <Card.Text>{armour[0].rating}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{armour[0].encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{armour[0].price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
      <div className='flexCentered'>
        {props.item && props.itemList.length > 0
          ? props.itemList.map(item => (
              <Card key={item[0].id} className='customCard m-2'>
                <Card.Img className='image' variant='top' src={item[0].image} />
                <Card.Body>
                  <Card.Title>{item[0].description}</Card.Title>
                  <Card.Title>Target Stat</Card.Title>
                  <Card.Text>{item[0].target_stat}</Card.Text>
                  <Card.Title>Amount</Card.Title>
                  <Card.Text>{item[0].amount}</Card.Text>
                  <Card.Title>Encumberance</Card.Title>
                  <Card.Text>{item[0].encumberance}</Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>{item[0].price}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
    </>
  )
}

export default DisplayCard
