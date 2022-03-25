import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Card,
  Table
} from 'react-bootstrap'
import UpdateCharacterSkills from './UpdateCharacterSkills'
import UpdateCharacterStats from './UpdateCharacterStats'
import UpdateCurrentStats from './UpdateCurrentStats'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import SelectItem from './SelectItem'
import MultiCard from './MultiCard'
import CharacterEquipment from './CharacterEquipment'

function CurrentCharacter (props) {
  const [showCharacterStats, setShowCharacterStats] = useState(false)
  const [showCharacterSkills, setShowCharacterSkills] = useState(false)
  const [showAvalibleItems, setShowAvalibleItems] = useState(false)
  const [showItemRemoveModel, setShowItemRemoveModal] = useState(false)
  const [showCurrentStatsModal, setShowCurrentStats] = useState(false)
  const [showCharacterEquipment, setShowCharacterEquipment] = useState(false)

  const weapons = useSelector(state => state.characterStore.characterWeapons)

  const showCurrentStat = () => setShowCurrentStats(true)
  const stopShowCurrentStat = () => setShowCurrentStats(false)

  const showStats = () => setShowCharacterStats(true)
  const stopShowStats = () => setShowCharacterStats(false)

  const showSkills = () => setShowCharacterSkills(true)
  const stopShowSkills = () => setShowCharacterSkills(false)

  const showUpdateItemModel = () => setShowItemRemoveModal(true)
  const stopShowUpdateItemModel = () => setShowItemRemoveModal(false)

  const showItemModel = () => setShowAvalibleItems(true)
  const stopShowItemModel = () => setShowAvalibleItems(false)

  const showEquipment = () => setShowCharacterEquipment(true)
  const stopShowEquipment = () => {
    setShowCharacterEquipment(false)
  }

  const dispatch = useDispatch()

  const currentCharacter = useSelector(
    state => state.characterStore.currentCharacter
  )
  const currentSkills = useSelector(
    state => state.characterStore.characterSkills
  )
  const characterWeapons = useSelector(
    state => state.armouryStore.currentWeapons
  )
  const characterArmour = useSelector(state => state.armouryStore.currentArmour)
  const currentItems = useSelector(state => state.armouryStore.currentItems)
  const skills = useSelector(state => state.characterStore.skills)
  const items = useSelector(state => state.armouryStore.items)

  console.log(currentCharacter)

  return (
    <>
      <Modal fullscreen={true} show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>Selected Character</Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Img
                    className='image'
                    variant='top'
                    src={currentCharacter.image}
                  />
                  <Card.Title>
                    {currentCharacter.name} - {currentCharacter.background}
                  </Card.Title>
                  <Button onClick={showCurrentStat}>Edit Current Stats</Button>
                  {/* Update HP, GOLD, SILVER, STAMINA, EXPERIANCE */}

                  <Card.Text className='text-center'>
                    {currentCharacter.background_effects}
                  </Card.Text>
                  <Card.Title>Current Gold / Silver:</Card.Title>
                  <Card.Text className='text-center'>
                    {currentCharacter.gold} / {currentCharacter.silver}
                  </Card.Text>
                  <Card.Title>Character Statistics</Card.Title>
                  <Card.Title>Current HP:</Card.Title>
                  <Card.Text className='text-center'>
                    {currentCharacter.hp}
                  </Card.Text>
                  <Card.Title>Current Staminia:</Card.Title>
                  <Card.Text className='text-center'>
                    {currentCharacter.stamina}
                  </Card.Text>
                  <Card.Title>Current Experiance:</Card.Title>
                  <Card.Text className='text-center'>
                    {currentCharacter.experience_points > 0
                      ? currentCharacter.experience_points
                      : 'Play to gain XP'}
                  </Card.Text>
                  <Button onClick={setShowCharacterStats}>
                    Edit Character Stats (level up)
                  </Button>
                  {/* Update Strength, Dex, Concentration, Intelligence, Chrisma */}

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Statistic</th>
                        <th>Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Stength</td>
                        <td>{currentCharacter.strength}</td>
                      </tr>
                      <tr>
                        <td>Dexterity</td>
                        <td>{currentCharacter.dexterity}</td>
                      </tr>
                      <tr>
                        <td>Concentration</td>
                        <td>{currentCharacter.concentration}</td>
                      </tr>
                      <tr>
                        <td>Intelligence</td>
                        <td>{currentCharacter.intelligence}</td>
                      </tr>
                      <tr>
                        <td>Charisma</td>
                        <td>{currentCharacter.charisma}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />
                  <Button onClick={setShowCharacterSkills}>
                    Edit Character Ability (level up)
                  </Button>
                  {/* Update Character Skills */}
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Ability</th>
                        <th>Level</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skills && currentSkills && currentSkills.length > 0
                        ? skills.map((skill, i) => (
                            <tr key={skill.id}>
                              <td>{skill.name}</td>
                              <td>{currentSkills[i].skill_level}</td>
                              <td>{skill.description}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </Table>
                </Card>
              </Col>
              <Col>
                {' '}
                <Button onClick={showEquipment}>
                  Update Character Weapons and Armour
                </Button>
                {characterArmour &&
                characterWeapons &&
                currentItems &&
                items ? (
                  <Card>
                    <h4>Armour</h4>
                    <MultiCard armour armourList={characterArmour} />
                    <h4>Weapons</h4>
                    <MultiCard weapon weapons={characterWeapons} />
                    <Button variant='success' onClick={showItemModel}>
                      Update items
                    </Button>
                    <Button variant='danger' onClick={showUpdateItemModel}>
                      Remove items
                    </Button>
                    <h4>Items</h4>
                    <MultiCard item itemList={currentItems} />
                  </Card>
                ) : (
                  <>No data</>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <SelectItem
        show={showAvalibleItems}
        onHide={stopShowItemModel}
        items={items}
        character={currentCharacter}
      />

      <SelectItem
        show={showItemRemoveModel}
        onHide={stopShowUpdateItemModel}
        items={currentItems}
        character={currentCharacter}
        remove
      />

      <UpdateCharacterStats show={showCharacterStats} onHide={stopShowStats} />

      <UpdateCurrentStats
        currentCharacter={currentCharacter}
        show={showCurrentStatsModal}
        onHide={stopShowCurrentStat}
      />
      <UpdateCharacterSkills
        show={showCharacterSkills}
        onHide={stopShowSkills}
        currentSkills={currentSkills}
        currentCharacter={currentCharacter}
      />

      <CharacterEquipment
        show={showCharacterEquipment}
        currentCharacter={currentCharacter}
        onHide={stopShowEquipment}
        next={() => {
          stopShowEquipment()
        }}
      />
    </>
  )
}

export default CurrentCharacter
