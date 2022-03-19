/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('weapons').del()
  await knex('weapons').insert([
    {
      id: 1,
      name: 'Simple sword',
      damage: '1 d6 + strength ',
      critial: '6, on d6, strengh bonus x2',
      penetration: 2,
      encumberance: 4,
      image: 'https://cdn-icons-png.flaticon.com/512/595/595587.png',
      price: '1 gold'
    },
    {
      id: 2,
      name: 'Heavy sword',
      damage: '1 d10 + strength ',
      critial: '8 or above, on d10, strengh bonus x2',
      penetration: 4,
      encumberance: 6,
      image:
        'https://cdn-icons.flaticon.com/png/512/2929/premium/2929708.png?token=exp=1646903444~hmac=55144be0a02290b527e443fdc0388822',
      price: '3 gold'
    },
    {
      id: 3,
      name: 'Axe',
      damage: '1 d6 + strength ',
      critial: '5 or above, on d6, strengh bonus x2',
      penetration: 4,
      encumberance: 5,
      image:
        'https://cdn-icons.flaticon.com/png/512/2272/premium/2272404.png?token=exp=1646903670~hmac=b36836b949eac36a5e210eba27bad00e',
      price: '2 gold'
    },
    {
      id: 4,
      name: 'Battle Axe',
      damage: '1 d12 + strength ',
      critial: '9 or above, on d12, strengh bonus x2',
      penetration: 6,
      encumberance: 7,
      image:
        'https://cdn-icons.flaticon.com/png/512/1912/premium/1912539.png?token=exp=1646903662~hmac=3b0285bae7d94b4b3b24cbc8cb92e845',
      price: '5 gold'
    },
    {
      id: 5,
      name: 'Spear',
      damage: '1 d12',
      critial: '7 or above, on d12, strengh bonus applies',
      penetration: 6,
      encumberance: 6,
      image: 'https://cdn-icons-png.flaticon.com/512/3939/3939547.png',
      price: '4 gold'
    },
    {
      id: 6,
      name: 'Crossbow',
      damage: '2 d6 + 4',
      critial: '4 or above, on either d6, ignore armour',
      penetration: 6,
      encumberance: 6,
      image: 'https://cdn-icons-png.flaticon.com/512/1624/1624447.png',
      price: '8 gold'
    },
    {
      id: 7,
      name: 'Bow',
      damage: '2 d6 + half strengh bonus',
      critial: '6, on either d6, strengh full strength bonus applies',
      penetration: 2,
      encumberance: 3,
      image:
        'https://cdn-icons.flaticon.com/png/512/4439/premium/4439420.png?token=exp=1646904235~hmac=14747c357b6509f0831f5a6208799652',
      price: '4 gold'
    },
    {
      id: 8,
      name: 'Heavy Sheild',
      damage: 'N/A',
      critial:
        'When being shot at raise sheild to stop attacks, can stop bows and crossbows',
      penetration: 0,
      encumberance: 6,
      image: 'https://cdn-icons-png.flaticon.com/512/929/929571.png',
      price: '4 gold'
    },
    {
      id: 9,
      name: 'Sheild',
      damage: 'N/A',
      critial: 'When being shot at raise sheild to stop attacks, can stop bows',
      penetration: 0,
      encumberance: 3,
      image: 'https://cdn-icons-png.flaticon.com/512/786/786245.png',
      price: '2 gold'
    }
  ])
}
