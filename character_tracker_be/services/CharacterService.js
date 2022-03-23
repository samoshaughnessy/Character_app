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
    console.log(characterDetails)
    console.log(characterDetails.description.name)
    console.log(userID)
    const character = {
      name: characterDetails.description.name,
      background: characterDetails.description.background,
      background_effects: characterDetails.description.backgroundEffect,
      strength: characterDetails.stats.strength,
      dexterity: characterDetails.stats.dexterity,
      intelligence: characterDetails.stats.intelligence,
      concentration: characterDetails.stats.concentration,
      charisma: characterDetails.stats.charisma,
      hp: characterDetails.stats.hp,
      stamina: characterDetails.stats.stamina,
      gold: 0,
      silver: 0,
      user_id: userID,
      image: characterDetails.description.image
    }

    const characterID = await this.knex
      .insert(character)
      .into('character')
      .returning('id')

    // insert into weapons

    // insert into skills

    console.log(characterID)

    let swords_skills = {
      skills_id: 1,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.swordPlay
    }

    let bow_skills = {
      skills_id: 2,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.bowUse
    }
    let crossbow_skills = {
      skills_id: 3,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.crossbowProficency
    }
    let spear_skills = {
      skills_id: 4,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.spearPlay
    }
    let axe_skills = {
      skills_id: 5,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.axePlay
    }
    let sheild_skills = {
      skills_id: 6,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.sheildPlay
    }
    let persuade_skills = {
      skills_id: 7,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.persuade
    }
    let intimidate_skills = {
      skills_id: 8,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.intimidate
    }
    let awareness_skills = {
      skills_id: 9,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.awareness
    }
    let search_skills = {
      skills_id: 10,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.search
    }
    let healing_skills = {
      skills_id: 11,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.healing
    }
    let craft_skills = {
      skills_id: 12,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.craft
    }
    let tactics_skills = {
      skills_id: 13,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.tactics
    }
    let hunt_skills = {
      skills_id: 14,
      character_id: characterID[0].id,
      skill_level: characterDetails.skills.hunt
    }
    // insert skills into skills table

    let skillsArray = [
      swords_skills,
      bow_skills,
      crossbow_skills,
      spear_skills,
      axe_skills,
      sheild_skills,
      persuade_skills,
      intimidate_skills,
      awareness_skills,
      search_skills,
      healing_skills,
      craft_skills,
      tactics_skills,
      hunt_skills
    ]

    skillsArray.forEach(async element => {
      await this.knex.insert(element).into('character_skills')
    })

    //character weapon and armour

    const armour = characterDetails.weapons.selectedArmour

    armour.forEach(async element => {
      await this.knex
        .insert({ character_id: characterID[0].id, armour_id: element.id })
        .into('character_armour')
    })

    const weapons = characterDetails.weapons.selectedWeapons

    weapons.forEach(async element => {
      console.log(element)
      if (element.id == 6 || 7) {
        element.ammunition = 10
      } else {
        element.ammunition = 0
      }
      await this.knex
        .insert({
          character_id: characterID[0].id,
          weapon_id: element.id,
          ammunition: element.ammunition
        })
        .into('character_weapons')
    })
    console.log(armour)
    console.log(weapons)

    character.id = characterID[0].id

    return character
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

  async getSkills () {
    const skills = await this.knex('skills').select('*')

    return skills
  }

  async getCurrentSkills (characterId, userId) {
    const skills = await this.knex('character_skills')
      .select('*')
      .where({ character_id: characterId })
      .orderBy('skills_id')

    return skills
  }
}

module.exports = CharacterService
