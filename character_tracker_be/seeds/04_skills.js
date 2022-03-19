/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('skills').del()
  await knex('skills').insert([
    {
      id: 1,
      name: 'Sword Play',
      description: 'You know how to use a sword, each point is 1 d6'
    },
    {
      id: 2,
      name: 'Bow use',
      description: 'You know how to use a bow, each point is 1 d6'
    },
    {
      id: 3,
      name: 'Crossbow Proficency',
      description: 'You know how to use a crossbow, each point is 1 d6'
    },
    {
      id: 4,
      name: 'Spear Play',
      description: 'You know how to use a spear, each point is 1 d6'
    },
    {
      id: 5,
      name: 'Axe Play',
      description: 'You know how to use a axe, each point is 1 d6'
    },
    {
      id: 6,
      name: 'Sheild Play',
      description: 'You know how to use a sheild, each point is 1 d6'
    },
    {
      id: 7,
      name: 'Persuade',
      description:
        'You know how have experience in persuation, each point is 1 d6'
    },
    {
      id: 8,
      name: 'Intimidate',
      description:
        'You know how intimidate people to get what you want, each point is 1 d6'
    },
    {
      id: 9,
      name: 'Awareness',
      description:
        'You know can pay attention to small details, each point is 1 d6'
    },
    {
      id: 10,
      name: 'Search',
      description: 'You know can search for hidden things, each point is 1 d6'
    },
    {
      id: 11,
      name: 'Healing',
      description:
        'You know the body and can remedy ailments, each point is 1 d6'
    },
    {
      id: 12,
      name: 'Craft',
      description: 'You know how to craft, each point is 1 d6'
    },
    {
      id: 13,
      name: 'Tactics',
      description:
        'You know how to examine a battle and formulate tactics, each point is 1 d6'
    },
    {
      id: 14,
      name: 'Hunt',
      description: 'You know how hunt, each point is 1 d6'
    }
  ])
}
