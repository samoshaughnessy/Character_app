/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      id: 1,
      encumberance: 1,
      name: 'Health Potion',
      description: 'Heals some health',
      target_stat: 'HP',
      amount: 7,
      image: 'https://cdn-icons-png.flaticon.com/512/7104/7104133.png',
      price: '5 silver'
    },
    {
      id: 2,
      encumberance: 2,
      name: 'Greater Heath Potion',
      description: 'Heals Health',
      target_stat: 'HP',
      amount: 20,
      image: 'https://cdn-icons-png.flaticon.com/512/7154/7154865.png',
      price: '2 gold'
    },
    {
      id: 3,
      encumberance: 1,
      name: 'Strength Potion',
      description: 'Grants you strength',
      target_stat: 'Strength',
      amount: 5,
      image: 'https://cdn-icons-png.flaticon.com/512/2736/2736454.png',
      price: '1 gold'
    },
    {
      id: 4,
      encumberance: 3,
      name: 'Rope Coil 5 m',
      description: 'A good length of rope goes a long way',
      target_stat: 'N/A',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/3531/3531811.png',
      price: '10 silver'
    },
    {
      id: 5,
      encumberance: 2,
      name: 'Torch',
      description: 'A light in the dark',
      target_stat: 'NA',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/1021/1021216.png',
      price: '10 silver'
    },
    {
      id: 6,
      encumberance: 1,
      name: 'Tinder box',
      description: 'One spark if used wisely will set something alight',
      target_stat: 'N/A',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/7114/7114469.png',
      price: '1 silver'
    },
    {
      id: 7,
      encumberance: 2,
      name: 'Sleeping Mat',
      description: 'If you want to sleep in style',
      target_stat: 'N/A',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/2826/2826933.png',
      price: '1 gold'
    },
    {
      id: 8,
      encumberance: 3,
      name: 'Backpack',
      description: 'Carry more items',
      target_stat: 'N/A',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/3210/3210074.png',
      price: '2 gold'
    },
    {
      id: 9,
      encumberance: 4,
      name: 'Revival Kit',
      description: 'Bring them back',
      target_stat: 'HP',
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/512/2231/2231042.png',
      price: '10 gold'
    },
    {
      id: 10,
      encumberance: 4,
      name: 'Medical supply kit',
      description: 'Fix them right up',
      target_stat: 'HP',
      amount: 50,
      image: 'https://cdn-icons-png.flaticon.com/512/4097/4097484.png',
      price: '5 gold'
    }
  ])
}
