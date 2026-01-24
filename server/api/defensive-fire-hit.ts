import type { DefensiveFireHit } from '~/types'
import { EnemyType } from '~/types/enum'

const defensiveFireHit: DefensiveFireHit[] = [
  {
    enemyType: EnemyType.Me109,
    results: [
      {
        roll: '< 2',
        effect: 'FCAB'
      },
      {
        roll: '3-6',
        effect: 'FCA'
      },
      {
        roll: '7-8',
        effect: 'FBOA'
      },
      {
        roll: '9+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Me110,
    results: [
      {
        roll: '< 3',
        effect: 'FCAB'
      },
      {
        roll: '4-5',
        effect: 'FCA'
      },
      {
        roll: '6-7',
        effect: 'FBOA'
      },
      {
        roll: '8+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Ju88C6,
    results: [
      {
        roll: '< 3',
        effect: 'FCAB'
      },
      {
        roll: '4-5',
        effect: 'FCA'
      },
      {
        roll: '6-7',
        effect: 'FBOA'
      },
      {
        roll: '8+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Fw190,
    results: [
      {
        roll: '< 2',
        effect: 'FCAB'
      },
      {
        roll: '3-7',
        effect: 'FCA'
      },
      {
        roll: '8-9',
        effect: 'FBOA'
      },
      {
        roll: '10+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Me210,
    results: [
      {
        roll: '< 3',
        effect: 'FCAB'
      },
      {
        roll: '4-5',
        effect: 'FCA'
      },
      {
        roll: '6-7',
        effect: 'FBOA'
      },
      {
        roll: '8+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Me410,
    results: [
      {
        roll: '< 3',
        effect: 'FCAB'
      },
      {
        roll: '4-5',
        effect: 'FCA'
      },
      {
        roll: '6-7',
        effect: 'FBOA'
      },
      {
        roll: '8+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Ta152H,
    results: [
      {
        roll: '< 2',
        effect: 'FCAB'
      },
      {
        roll: '3-7',
        effect: 'FCA'
      },
      {
        roll: '8-9',
        effect: 'FBOA'
      },
      {
        roll: '10+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.He162,
    results: [
      {
        roll: '< 2',
        effect: 'FCAB'
      },
      {
        roll: '3-7',
        effect: 'FCA'
      },
      {
        roll: '8-9',
        effect: 'FBOA'
      },
      {
        roll: '10+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Me163,
    results: [
      {
        roll: '< 3',
        effect: 'FCAB'
      },
      {
        roll: '4-7',
        effect: 'FCA'
      },
      {
        roll: '8-10',
        effect: 'FBOA'
      },
      {
        roll: '11+',
        effect: 'Destroyed'
      }
    ]
  },
  {
    enemyType: EnemyType.Me262,
    results: [
      {
        roll: '< 4',
        effect: 'FCAB'
      },
      {
        roll: '5-7',
        effect: 'FCA'
      },
      {
        roll: '8-10',
        effect: 'FBOA'
      },
      {
        roll: '11+',
        effect: 'Destroyed'
      }
    ]
  }
]
export default eventHandler(async () => defensiveFireHit)
