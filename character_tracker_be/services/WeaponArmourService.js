// get all character armour and weapon
// update weapon
// update armour
// update ammunition

const e = require('express')

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
      return newCurrentArmour.then(armourData => {
        return newCurrentItems.then(itemData => {
          let characterItemdata = itemData.map(element => {
            return element[0]
          })

          let characterWeapondata = weaponData.map(element => {
            return element[0]
          })

          let characterArmourdata = armourData.map(element => {
            return element[0]
          })
          return {
            weapons: characterWeapondata,
            armour: characterArmourdata,
            items: characterItemdata
          }
        })
      })
    })
  }

  async newWeapons (characterId, userId, weapons) {
    await this.knex('character_weapons')
      .where({ character_id: characterId })
      .del()
    await this.knex('character_armour')
      .where({ character_id: characterId })
      .del()

    console.log(weapons)

    weapons.selectedArmour.forEach(async element => {
      await this.knex('character_armour').insert({
        armour_id: element.id,
        character_id: characterId
      })
    })

    weapons.selectedWeapons.forEach(async element => {
      if (element.id == 6 || element.id == 7) {
        await this.knex('character_weapons').insert({
          weapon_id: element.id,
          character_id: characterId,
          ammunition: 10
        })
      } else {
        await this.knex('character_weapons').insert({
          weapon_id: element.id,
          character_id: characterId
        })
      }
    })
  }

  async deleteItems (characterId, userId, items) {
    items.forEach(async element => {
      await this.knex('character_inventory')
        .where({ character_id: characterId })
        .andWhere({ item_id: element.id })
        .del()
    })
    return 'all done'
  }

  async setItems (characterId, userId, items) {
    function getData (current, i, knex, weapons) {
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
    console.log(items, 'items')

    items.forEach(async element => {
      await this.knex
        .insert({
          item: element.name,
          amount: 1,
          character_id: characterId,
          item_id: element.id
        })
        .into('character_inventory')
    })

    const currentItems = await this.knex('character_inventory')
      .select('*')
      .where({ character_id: characterId })

    const newCurrentItems = Promise.all([
      ...currentItems.map((current, i) =>
        getData(current, i, this.knex, 'items')
      )
    ])

    return newCurrentItems.then(itemData => {
      console.log(itemData, 'item data!')
      let data = []
      for (let i = 0; i < itemData.length; i++) {
        data.push(itemData[i][0])
      }
      console.log(data)
      return {
        items: data
      }
    })
  }
}

module.exports = WeaponArmourService
