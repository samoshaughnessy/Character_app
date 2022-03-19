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
      image:
        'https://cdn-icons.flaticon.com/png/512/4417/premium/4417793.png?token=exp=1646893717~hmac=868c1bb22ce96cd41c140ee43ed33780',
      price: '5 silver'
    },
    {
      id: 2,
      encumberance: 2,
      name: 'Greater Heath Potion',
      description: 'Heals Health',
      target_stat: 'HP',
      amount: 20,
      image:
        'https://cdn-icons.flaticon.com/png/512/4417/premium/4417881.png?token=exp=1646893736~hmac=e86581f5c8a292efb2429eff3298df92',
      price: '2 gold'
    },
    {
      id: 3,
      encumberance: 1,
      name: 'Strength Potion',
      description: 'Grants you strength',
      target_stat: 'Strength',
      amount: 5,
      image:
        'https://cdn-icons.flaticon.com/png/512/2790/premium/2790362.png?token=exp=1646894029~hmac=83384b91ade9f7f1c1eac87dd4d16f34',
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
      image:
        'https://cdn-icons.flaticon.com/png/512/2919/premium/2919268.png?token=exp=1646894435~hmac=372fd01b3c2405c2484f7734ac281a2d',
      price: '10 silver'
    },
    {
      id: 6,
      encumberance: 1,
      name: 'Tinder box',
      description: 'One spark if used wisely will set something alight',
      target_stat: 'N/A',
      amount: 0,
      image:
        'https://cdn-icons.flaticon.com/png/512/3574/premium/3574873.png?token=exp=1646894515~hmac=e293b051f4d161c202511b84767ccd46',
      price: '1 silver'
    },
    {
      id: 7,
      encumberance: 2,
      name: 'Sleeping Mat',
      description: 'If you want to sleep in style',
      target_stat: 'N/A',
      amount: 0,
      image:
        'https://cdn-icons.flaticon.com/png/512/804/premium/804945.png?token=exp=1646894544~hmac=57894164de038089269feff99585b17d',
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
