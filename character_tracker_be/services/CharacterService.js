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

  async updateSkills (character_id, skills) {
    console.log(skills)
    await this.knex('character')
      .update({ experience_points: skills.experiance })
      .where({ id: character_id })

    await this.knex('character_skills')
      .where({ character_id: character_id })
      .del()

    let swords_skills = {
      skills_id: 1,
      character_id: character_id,
      skill_level: skills.swordPlay
    }

    let bow_skills = {
      skills_id: 2,
      character_id: character_id,
      skill_level: skills.bowUse
    }
    let crossbow_skills = {
      skills_id: 3,
      character_id: character_id,
      skill_level: skills.crossbowProficency
    }
    let spear_skills = {
      skills_id: 4,
      character_id: character_id,
      skill_level: skills.spearPlay
    }
    let axe_skills = {
      skills_id: 5,
      character_id: character_id,
      skill_level: skills.axePlay
    }
    let sheild_skills = {
      skills_id: 6,
      character_id: character_id,
      skill_level: skills.sheildPlay
    }
    let persuade_skills = {
      skills_id: 7,
      character_id: character_id,
      skill_level: skills.persuade
    }
    let intimidate_skills = {
      skills_id: 8,
      character_id: character_id,
      skill_level: skills.intimidate
    }
    let awareness_skills = {
      skills_id: 9,
      character_id: character_id,
      skill_level: skills.awareness
    }
    let search_skills = {
      skills_id: 10,
      character_id: character_id,
      skill_level: skills.search
    }
    let healing_skills = {
      skills_id: 11,
      character_id: character_id,
      skill_level: skills.healing
    }
    let craft_skills = {
      skills_id: 12,
      character_id: character_id,
      skill_level: skills.craft
    }
    let tactics_skills = {
      skills_id: 13,
      character_id: character_id,
      skill_level: skills.tactics
    }
    let hunt_skills = {
      skills_id: 14,
      character_id: character_id,
      skill_level: skills.hunt
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

    return 'all done'
  }

  async updateStats (character_id, stats) {
    console.log(stats)
    await this.knex('character')
      .update({
        gold: stats.gold,
        silver: stats.silver,
        experience_points: stats.experience
      })
      .where({ id: character_id })
  }

  async updateStatistics (character_id, stats) {
    console.log(stats, character_id)
    await this.knex('character')
      .update({
        experience_points: stats.experiance,
        strength: stats.strength,
        dexterity: stats.dexterity,
        intelligence: stats.intelligence,
        concentration: stats.concentration,
        charisma: stats.charisma,
        hp: stats.hp,
        stamina: stats.stamina
      })
      .where({ id: character_id })
  }
}

module.exports = CharacterService
