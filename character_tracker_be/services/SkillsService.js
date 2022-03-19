// get skill descriptions
// character id

class CharacterSkills {
    constructor(knex){
        this.knex = knex
    }

    async createCharacterSkills(characterID, characterSkills){


        let idArray = characterSkills.map((skill) => {
     await this.knex
            .insert(
                {skills_id: skill.skillID,
                     skill_level: skill.skillLevel
                     , character_id: characterID}
                     )
                     .into('character_skills')
                     .returning('id')

        });

        return idArray

    }

    async updateCharacterSkill(characterID, characterSkill){

        const skill = {
            skills_id: characterSkill.id,
            skill_level: characterSkill.level,
            character_id: characterID 
        }
        const id = await this.knex.insert({skill}).into('character_skills').returning('id')
        return id
    }

}