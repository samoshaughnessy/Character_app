/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// users
//armour
//weapons
// skills
// items
exports.up = function (knex) {
  return knex.schema
    .createTable('users', table => {
      table
        .increments('id')
        .unsigned()
        .primary()
      table.string('email').unique()
      table.string('password')
      table.boolean('gm')
      table.string('gmail_id')
      table.string('gmail_access')
    })
    .then(() => {
      return knex.schema.createTable('armour', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.integer('rating').notNullable()
        table.integer('encumberance').notNullable()
        table.string('image')
        table.string('price').notNullable()
      })
    })
    .then(() => {
      return knex.schema.createTable('weapons', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('damage').notNullable()
        table.string('critial').notNullable()
        table.integer('penetration').notNullable()
        table.integer('encumberance').notNullable()
        table.string('price').notNullable()
        table.string('image')
      })
    })
    .then(() => {
      return knex.schema.createTable('skills', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('description').notNullable()
      })
    })
    .then(() => {
      return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('description').notNullable()
        table.string('target_stat').notNullable()
        table.integer('amount').notNullable()
        table.string('image')
        table.integer('encumberance')
        table.string('price')
      })
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return Promise.all([
    knex.schema
      .dropTable('users')
      .dropTable('weapons')
      .dropTable('armour')
      .dropTable('skills')
      .dropTable('items')
  ])
}
