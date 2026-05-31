import type { FlakHit } from '~/types'
import { FlakStrength } from '~/types/enum'

const flakHit: FlakHit[] = [
  {
    strength: FlakStrength.LightFlak,
    results: [
      {
        roll: '2',
        effect: true
      },
      {
        roll: '3-11',
        effect: false
      },
      {
        roll: '12',
        effect: true
      }
    ]
  },
  {
    strength: FlakStrength.ModerateFlak,
    results: [
      {
        roll: '< 3',
        effect: true
      },
      {
        roll: '4-6',
        effect: false
      },
      {
        roll: '7',
        effect: true
      },
      {
        roll: '8-10',
        effect: false
      },
      {
        roll: '11+',
        effect: true
      }
    ]
  },
  {
    strength: FlakStrength.HeavyFlak,
    results: [
      {
        roll: '< 3',
        effect: true
      },
      {
        roll: '4',
        effect: false
      },
      {
        roll: '5',
        effect: true
      },
      {
        roll: '7',
        effect: true
      },
      {
        roll: '8',
        effect: false
      },
      {
        roll: '9',
        effect: true
      },
      {
        roll: '10',
        effect: false
      },
      {
        roll: '11+',
        effect: true
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const flakStrength = query.flakStrength

  return flakHit.find(hit => flakStrength === hit.strength)
})
