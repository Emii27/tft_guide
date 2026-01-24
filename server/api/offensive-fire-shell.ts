import type { OffensiveFireShell } from '~/types'
import { EnemyDirection } from '~/types/enum'

const offensiveFireShell: OffensiveFireShell[] = [
  {
    direction: EnemyDirection.D1200,
    results: [
      {
        roll: '2',
        effect: '3'
      },
      {
        roll: '3-5',
        effect: '2'
      },
      {
        roll: '6-7',
        effect: '1'
      },
      {
        roll: '8-11',
        effect: '2'
      },
      {
        roll: '12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.D0130,
    results: [
      {
        roll: '2',
        effect: '3'
      },
      {
        roll: '3-5',
        effect: '2'
      },
      {
        roll: '6-7',
        effect: '1'
      },
      {
        roll: '8-11',
        effect: '2'
      },
      {
        roll: '12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.D1030,
    results: [
      {
        roll: '2',
        effect: '3'
      },
      {
        roll: '3-5',
        effect: '2'
      },
      {
        roll: '6-7',
        effect: '1'
      },
      {
        roll: '8-11',
        effect: '2'
      },
      {
        roll: '12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.D0300,
    results: [
      {
        roll: '2-3',
        effect: '3'
      },
      {
        roll: '4-6',
        effect: '2'
      },
      {
        roll: '7',
        effect: '1'
      },
      {
        roll: '8-10',
        effect: '2'
      },
      {
        roll: '11-12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.D0900,
    results: [
      {
        roll: '2-3',
        effect: '3'
      },
      {
        roll: '4-6',
        effect: '2'
      },
      {
        roll: '7',
        effect: '1'
      },
      {
        roll: '8-10',
        effect: '2'
      },
      {
        roll: '11-12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.D0600,
    results: [
      {
        roll: '2',
        effect: '5'
      },
      {
        roll: '3',
        effect: '4'
      },
      {
        roll: '4-5',
        effect: '3'
      },
      {
        roll: '6-8',
        effect: '2'
      },
      {
        roll: '9-10',
        effect: '3'
      },
      {
        roll: '11',
        effect: '4'
      },
      {
        roll: '12',
        effect: '5'
      }
    ]
  },
  {
    direction: EnemyDirection.Dive,
    results: [
      {
        roll: '2-3',
        effect: '3'
      },
      {
        roll: '4-5',
        effect: '2'
      },
      {
        roll: '6-8',
        effect: '1'
      },
      {
        roll: '9-10',
        effect: '2'
      },
      {
        roll: '11-12',
        effect: '3'
      }
    ]
  },
  {
    direction: EnemyDirection.Climb,
    results: [
      {
        roll: '2-3',
        effect: '3'
      },
      {
        roll: '4-5',
        effect: '2'
      },
      {
        roll: '6-8',
        effect: '1'
      },
      {
        roll: '9-10',
        effect: '2'
      },
      {
        roll: '11-12',
        effect: '3'
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const direction = query.direction

  if (direction) {
    return offensiveFireShell.find(hit => hit.direction === direction)
  }
  return offensiveFireShell
})
