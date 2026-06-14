import type { OffensiveFireMultiplier } from '~/types'
import { EnemyType } from '~/types/enum'

const offensiveFireMultiplier: OffensiveFireMultiplier[] = [
  {
    enemyType: EnemyType.Me109,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Nov 1943'),
    results: [
      {
        roll: '1',
        effect: 'x0 (a)'
      },
      {
        roll: '2-3',
        effect: 'x0 (b)'
      },
      {
        roll: '4-5',
        effect: 'x1'
      },
      {
        roll: '6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Fw190,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Nov 1943'),
    results: [
      {
        roll: '1',
        effect: 'x0 (a)'
      },
      {
        roll: '2',
        effect: 'x0 (b)'
      },
      {
        roll: '3-4',
        effect: 'x1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Ju88C6,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Nov 1943'),
    results: [
      {
        roll: '1',
        effect: 'x0 (a)'
      },
      {
        roll: '2-3',
        effect: 'x0 (b)'
      },
      {
        roll: '4-5',
        effect: 'x1'
      },
      {
        roll: '6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me110,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1-2',
        effect: 'x0 (b)'
      },
      {
        roll: '3-5',
        effect: 'x1'
      },
      {
        roll: '6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me109,
    periodStart: new Date('Dec 1943'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (b)'
      },
      {
        roll: '2',
        effect: 'x1'
      },
      {
        roll: '3-4',
        effect: 'x1 +1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Fw190,
    periodStart: new Date('Dec 1943'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (b)'
      },
      {
        roll: '2',
        effect: 'x1'
      },
      {
        roll: '3',
        effect: 'x1 +1'
      },
      {
        roll: '4',
        effect: 'x2 +1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me210,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (b)'
      },
      {
        roll: '2-3',
        effect: 'x1'
      },
      {
        roll: '4-5',
        effect: 'x1 +1'
      },
      {
        roll: '6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Ju88C6,
    periodStart: new Date('Dec 1943'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (a)'
      },
      {
        roll: '2',
        effect: 'x0 (b)'
      },
      {
        roll: '3-4',
        effect: 'x1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me410,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1-2',
        effect: 'x0 (b)'
      },
      {
        roll: '3-5',
        effect: 'x1'
      },
      {
        roll: '6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Ta152H,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (b)'
      },
      {
        roll: '2',
        effect: 'x1'
      },
      {
        roll: '3',
        effect: 'x1 +1'
      },
      {
        roll: '4',
        effect: 'x1 +2'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.He162,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1',
        effect: 'x0 (b)'
      },
      {
        roll: '3-4',
        effect: 'x1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me163,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1-4',
        effect: 'x1'
      },
      {
        roll: '5-6',
        effect: 'x2'
      }
    ]
  },
  {
    enemyType: EnemyType.Me262,
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '1-2',
        effect: 'x1'
      },
      {
        roll: '3-6',
        effect: 'x2'
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const enemyType = query.enemyType
  const month = query.month
  const year = query.year

  const date = new Date(`${month} ${year}`)

  if (enemyType) {
    return offensiveFireMultiplier.find(multiplier =>
      multiplier.enemyType === enemyType
      && date >= multiplier.periodStart
      && date <= multiplier.periodEnd
    )
  }

  return offensiveFireMultiplier
})
