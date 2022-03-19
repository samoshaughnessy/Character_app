class CharacterService {
  constructor (knex) {
    this.knex = knex
  }

  async getCharacters (userID) {
    const characters = await this.knex('character')
      .select('*')
      .where({ user_id: userID })

    return characters
  }

  async createCharacter (userID, characterDetails) {
    const character = {
      name: characterDetails.name,
      background: characterDetails.background,
      background_effects: characterDetails.background_effects,
      strength: characterDetails.strength,
      dexterity: characterDetails.dexterity,
      intelligence: characterDetails.intelligence,
      concentration: characterDetails.concentration,
      charisma: characterDetails.charisma,
      hp: characterDetails.hp,
      stamina: characterDetails.stamina,
      gold: characterDetails.gold,
      silver: characterDetails.silver,
      user_id: userID,
      image: characterDetails.image
    }

    const characterID = await this.knex
      .insert(character)
      .into('character')
      .returning('id')

    return characterID
  }

  async updateStats (userID, characterID, stats) {
    const newStats = {
      strength: stats.strength,
      dexterity: stats.dexterity,
      intelligence: stats.intelligence,
      concentration: stats.concentration,
      charisma: stats.charisma
    }

    const newCharacterID = await this.knex
      .insert(newStats)
      .into('character')
      .where({ user_id: userID })
      .andWhere({ id: characterID })
      .returning('id')

    return newCharacterID
  }

  async updateStatus (userID, characterID, status) {
    const newStatus = {
      hp: status.hp,
      stamina: status.stamina,
      gold: status.gold,
      silver: status.silver
    }

    const newCharacterID = await this.knex
      .insert(newStatus)
      .into('character')
      .where({ user_id: userID })
      .andWhere({ id: characterID })
      .returning('id')

    return newCharacterID
  }

  async updateDescription (userID, characterID, characterDescription) {
    const description = {
      name: characterDescription.name,
      background: characterDescription.background,
      background_effects: characterDescription.background_effects,
      image: characterDescription.image
    }

    const newCharacterID = await this.knex
      .insert(description)
      .into('character')
      .where({ user_id: userID })
      .andWhere({ id: characterID })
      .returning('id')

    return newCharacterID
  }
}

module.exports = CharacterService
