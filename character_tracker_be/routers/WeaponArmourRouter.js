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
    return router
  }

  getAll (req, res) {
    console.log('Getting all')
    return this.weaponArmourService
      .getArmoury()
      .then(armoury => res.send(armoury))
  }
}

module.exports = WeaponArmourRouter
