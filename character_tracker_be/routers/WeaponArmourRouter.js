/*

Get all weapons & armour --> character id

Update weapon
update ammunition

Update armour
*/

const auth = require('../auth/auth')

class WeaponArmourRouter {
  constructor (express, weaponArmourService, authClass) {
    this.express = express
    this.weaponArmourService = weaponArmourService
    this.authClass = authClass
  }

  router () {
    let router = this.express.Router()
    router.get('/armoury', this.getAll.bind(this))
    router.get(
      '/armoury/:characterId',
      this.authClass.authenticate(),
      this.getCurrent.bind(this)
    )
    return router
  }

  getAll (req, res) {
    console.log('Getting all')
    return this.weaponArmourService
      .getArmoury()
      .then(armoury => res.send(armoury))
  }

  getCurrent (req, res) {
    console.log('Getting current')
    return this.weaponArmourService
      .getCurrent(req.params.characterId, req.user[0].id)
      .then(current => {
        res.send(current)
      })
  }
}

module.exports = WeaponArmourRouter
