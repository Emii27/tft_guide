import type { OffensiveFireHit } from '~/types'
import { EnemyDirection } from '~/types/enum'

const offensiveFireHit: OffensiveFireHit[] = [
  {
    direction: EnemyDirection.D1200,
    results: [
      {
        roll: '< 8',
        effect: 'Miss'
      },
      {
        roll: '9+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.D0130,
    results: [
      {
        roll: '< 8',
        effect: 'Miss'
      },
      {
        roll: '9+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.D1030,
    results: [
      {
        roll: '< 8',
        effect: 'Miss'
      },
      {
        roll: '9+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.D0300,
    results: [
      {
        roll: '< 7',
        effect: 'Miss'
      },
      {
        roll: '8+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.D0900,
    results: [
      {
        roll: '< 7',
        effect: 'Miss'
      },
      {
        roll: '8+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.D0600,
    results: [
      {
        roll: '< 6',
        effect: 'Miss'
      },
      {
        roll: '7+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.Dive,
    results: [
      {
        roll: '< 8',
        effect: 'Miss'
      },
      {
        roll: '9+',
        effect: 'Hit'
      }
    ]
  },
  {
    direction: EnemyDirection.Climb,
    results: [
      {
        roll: '< 6',
        effect: 'Miss'
      },
      {
        roll: '7+',
        effect: 'Hit'
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const direction = query.direction

  if (direction) {
    return offensiveFireHit.find(hit => hit.direction === direction)
  }

  return offensiveFireHit
})
