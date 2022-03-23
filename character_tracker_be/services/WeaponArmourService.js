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
    const items = await this.knex('items').select('*')

    return { weapons, armour, items }
  }

  async getCurrent (characterId, userId) {
    function getData (current, i, knex, weapons) {
      console.log(current)
      if (weapons == 'weapons') {
        return knex
          .select('*')
          .from('weapons')
          .where({ id: current.weapon_id })
      } else if (weapons == 'armour') {
        return knex
          .select('*')
          .from('armour')
          .where({ id: current.armour_id })
      } else if (weapons == 'items') {
        return knex
          .select('*')
          .from('items')
          .where({ id: current.item_id })
      }
    }
    const currentWeapons = await this.knex('character_weapons')
      .select('*')
      .where({ character_id: characterId })
    const newCurrentWeapons = Promise.all([
      ...currentWeapons.map((current, i) => {
        console.log(current)
        return getData(current, i, this.knex, 'weapons')
      })
    ])
    const currentArmour = await this.knex('character_armour')
      .select('*')
      .where({ character_id: characterId })

    const newCurrentArmour = Promise.all([
      ...currentArmour.map((current, i) =>
        getData(current, i, this.knex, 'armour')
      )
    ])
    const currentItems = await this.knex('character_inventory')
      .select('*')
      .where({ character_id: characterId })

    const newCurrentItems = Promise.all([
      ...currentItems.map((current, i) =>
        getData(current, i, this.knex, 'items')
      )
    ])

    return newCurrentWeapons.then(weaponData => {
      console.log('New Current Weapons', weaponData)

      return newCurrentArmour.then(armourData => {
        console.log('New Current Armour', armourData)

        return newCurrentItems.then(itemData => {
          console.log('New Current Items', itemData)

          console.log({
            weapons: weaponData,
            armour: armourData,
            items: itemData
          })
          return {
            weapons: weaponData,
            armour: armourData,
            items: itemData
          }
        })
      })
    })
  }
}

module.exports = WeaponArmourService
