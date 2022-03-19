/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// character_inventory
// character_armour
// character_weapons
// character skills

exports.up = function (knex) {
  return knex.schema
    .createTable('character_inventory', table => {
      table.increments('id').primary()
      table.string('item').notNullable()
      table.integer('amount').notNullable()
      table.string('description').notNullable()
      table.integer('encumberance').notNullable()
      table.integer('character_id').unsigned()
      table.foreign('character_id').references('character.id')
      table.integer('item_id').unsigned()
      table.foreign('item_id').references('items.id')
    })
    .then(() => {
      return knex.schema.createTable('character_weapons', table => {
        table.increments('id').primary()
        table.integer('ammunition')
        table.integer('character_id').unsigned()
        table.foreign('character_id').references('character.id')
        table.integer('weapon_id').unsigned()
        table.foreign('weapon_id').references('weapons.id')
      })
    })
    .then(() => {
      return knex.schema.createTable('character_armour', table => {
        table.increments('id').primary()
        table.integer('character_id').unsigned()
        table.foreign('character_id').references('character.id')
        table.integer('armour_id').unsigned()
        table.foreign('armour_id').references('armour.id')
      })
    })
    .then(() => {
      return knex.schema.createTable('character_skills', table => {
        table.increments('id').primary()
        table.integer('skill_level').unsigned()
        table.integer('character_id').unsigned()
        table.foreign('character_id').references('character.id')
        table.integer('skills_id').unsigned()
        table.foreign('skills_id').references('skills.id')
      })
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {}
