// get all character armour and weapon
// update weapon
// update armour
// update ammunition

class WeaponArmourService {
  constructor (knex) {
    this.knex = knex
  }

  async getArmoury () {
    const weapons = await this.knex('weapons').select('*')
    const armour = await this.knex('armour').select('*')

    return { weapons, armour }
  }
}

module.exports = WeaponArmourService
