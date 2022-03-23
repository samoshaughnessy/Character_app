/*

Get all characters by user --> user_id
Place all character information in Redux 

update character form (name - background - background effect)

update character stats - strength - dexterity - intelligence - charisma - concentration
update character status - hp - stamina - gold - silver

update a new image for user
*/

class CharacterRouter {
  constructor (express, characterService, authClass) {
    this.express = express
    this.characterService = characterService
    this.authClass = authClass
  }

  router () {
    let router = this.express.Router()
    router.post('/create', this.authClass.authenticate(), this.post.bind(this))
    router.get('/all', this.authClass.authenticate(), this.get.bind(this))
    router.get('/skills', this.getSkills.bind(this))
    router.get(
      '/skills/:characterId',
      this.authClass.authenticate(),
      this.getCurrentSkills.bind(this)
    )

    return router
  }

  async post (req, res) {
    console.log(req.body)
    console.log(req.user[0])
    return this.characterService
      .createCharacter(req.user[0].id, req.body.character)
      .then(character => {
        res.send(character)
      })
  }

  async get (req, res) {
    console.log('checking get?')

    console.log(req.user[0])
    return this.characterService
      .getCharacters(req.user[0].id)
      .then(characterData => res.send(characterData))
  }

  async getSkills (req, res) {
    return this.characterService.getSkills().then(skills => res.send(skills))
  }

  async getCurrentSkills (req, res) {
    return this.characterService
      .getCurrentSkills(req.params.characterId, req.user[0].id)
      .then(currentSkills => res.send(currentSkills))
  }
}

module.exports = CharacterRouter
