/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('armour').del()
  await knex('armour').insert([
    {
      id: 1,
      name: 'Skullcap',
      rating: 3,
      encumberance: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/7159/7159673.png',
      price: '2 gold'
    },
    {
      id: 2,
      name: 'Closed Helm',
      rating: 5,
      encumberance: 4,
      image: 'https://cdn-icons-png.flaticon.com/512/812/812225.png',
      price: '5 gold'
    },
    {
      id: 3,
      name: 'Knightly Helm',
      rating: 8,
      encumberance: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/7148/7148967.png',
      price: '7 gold'
    },
    {
      id: 4,
      name: 'Leather Armour',
      rating: 3,
      encumberance: 4,
      image: 'https://cdn-icons-png.flaticon.com/512/1173/1173119.png',
      price: '7 gold'
    },
    {
      id: 5,
      name: 'Knightly Armour',
      rating: 10,
      encumberance: 8,
      image: 'https://cdn-icons-png.flaticon.com/512/1840/1840682.png',
      price: '12 gold'
    }
  ])
}
