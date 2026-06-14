import type { EnemyExperienceAttributionTable } from '~/types'
import { EnemyExperience } from '~/types/enum'

const enemyExperience: EnemyExperienceAttributionTable[] = [
  {
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1943'),
    results: [
      {
        enemyExperience: EnemyExperience.Experte,
        roll: '< 12',
        max: '1',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Ace,
        roll: '13-30',
        max: '2',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Veteran,
        roll: '31-70',
        max: '4',
        extra: '1D6: 1-3 = ' + EnemyExperience.Ace + ' ; 4-6 = ' + EnemyExperience.Flieger
      },
      {
        enemyExperience: EnemyExperience.Flieger,
        roll: '71-90',
        max: '3',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Novice,
        roll: '91+',
        max: '2',
        extra: EnemyExperience.Flieger
      }
    ]
  },
  {
    periodStart: new Date('May 1943'),
    periodEnd: new Date('Nov 1943'),
    results: [
      {
        enemyExperience: EnemyExperience.Experte,
        roll: '< 13',
        max: '1',
        extra: EnemyExperience.Ace
      },
      {
        enemyExperience: EnemyExperience.Ace,
        roll: '14-32',
        max: '2',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Veteran,
        roll: '33-72',
        max: '4',
        extra: EnemyExperience.Ace
      },
      {
        enemyExperience: EnemyExperience.Flieger,
        roll: '73-89',
        max: '3',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Novice,
        roll: '90+',
        max: '2',
        extra: EnemyExperience.Flieger
      }
    ]
  },
  {
    periodStart: new Date('Dec 1943'),
    periodEnd: new Date('Apr 1944'),
    results: [
      {
        enemyExperience: EnemyExperience.Experte,
        roll: '< 11',
        max: '1',
        extra: '1D6: 1-2 = ' + EnemyExperience.Ace + ' ; 3-6 = ' + EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Ace,
        roll: '12-28',
        max: '2',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Veteran,
        roll: '29-65',
        max: '4',
        extra: '1D6: 1-4 = ' + EnemyExperience.Ace + ' ; 5-6 = ' + EnemyExperience.Flieger
      },
      {
        enemyExperience: EnemyExperience.Flieger,
        roll: '66-87',
        max: '3',
        extra: '1D6: 1-3 = ' + EnemyExperience.Veteran + ' ; 4-6 = ' + EnemyExperience.Novice
      },
      {
        enemyExperience: EnemyExperience.Novice,
        roll: '88+',
        max: '2',
        extra: EnemyExperience.Flieger
      }
    ]
  },
  {
    periodStart: new Date('May 1944'),
    periodEnd: new Date('Nov 1944'),
    results: [
      {
        enemyExperience: EnemyExperience.Experte,
        roll: '< 8',
        max: '1',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Ace,
        roll: '9-22',
        max: '2',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Veteran,
        roll: '23-51',
        max: '4',
        extra: EnemyExperience.Flieger
      },
      {
        enemyExperience: EnemyExperience.Flieger,
        roll: '52-82',
        max: '3',
        extra: EnemyExperience.Novice
      },
      {
        enemyExperience: EnemyExperience.Novice,
        roll: '83+',
        max: '2',
        extra: '1D6: 1-2 = ' + EnemyExperience.Veteran + ' ; 3-6 = ' + EnemyExperience.Flieger
      }
    ]
  },
  {
    periodStart: new Date('Dec 1944'),
    periodEnd: new Date('May 1945'),
    results: [
      {
        enemyExperience: EnemyExperience.Experte,
        roll: '< 6',
        max: '2',
        extra: EnemyExperience.Veteran
      },
      {
        enemyExperience: EnemyExperience.Ace,
        roll: '7-20',
        max: '2',
        extra: '1D6: 1-4 = ' + EnemyExperience.Veteran + ' ; 5-6 = ' + EnemyExperience.Flieger
      },
      {
        enemyExperience: EnemyExperience.Veteran,
        roll: '21-43',
        max: '3',
        extra: '1D6: 1-3 = ' + EnemyExperience.Flieger + ' ; 4-6 = ' + EnemyExperience.Novice
      },
      {
        enemyExperience: EnemyExperience.Flieger,
        roll: '44-77',
        max: '3',
        extra: EnemyExperience.Novice
      },
      {
        enemyExperience: EnemyExperience.Novice,
        roll: '78+',
        max: '3',
        extra: EnemyExperience.Flieger
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const month = query.month
  const year = query.year

  const date = new Date(`${month} ${year}`)

  return enemyExperience.find(table =>
    date >= table.periodStart
    && date <= table.periodEnd
  )
})
