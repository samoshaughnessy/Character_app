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
      image:
        'https://cdn-icons.flaticon.com/png/512/2129/premium/2129245.png?token=exp=1646904900~hmac=26be5289f3cccc0856219ba15bbb85af',
      price: '2 gold'
    },
    {
      id: 2,
      name: 'Closed Helm',
      rating: 5,
      encumberance: 4,
      image:
        'https://cdn-icons.flaticon.com/png/512/3119/premium/3119385.png?token=exp=1646904906~hmac=9f176179573530ce2cd70b9aefd95924',
      price: '5 gold'
    },
    {
      id: 3,
      name: 'Knightly Helm',
      rating: 8,
      encumberance: 5,
      image:
        'https://cdn-icons.flaticon.com/png/512/3825/premium/3825043.png?token=exp=1646904890~hmac=5c850a155e573bc4ffa9b769b0efd389',
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
      image:
        'https://cdn-icons.flaticon.com/png/512/4680/premium/4680939.png?token=exp=1646905028~hmac=783da919d68e2bee38ca003e13d9f5ac',
      price: '12 gold'
    }
  ])
}
