import type { SprayFire } from '~/types'

const sprayFire: SprayFire[] = [
  {
    roll: '1',
    effect: 'MG jams - Fighter attacks normally (a)'
  },
  {
    roll: '2',
    effect: 'Fighter breaks off without firing'
  },
  {
    roll: '3',
    effect: 'Fighter attacks normally (b)'
  },
  {
    roll: '4',
    effect: 'Fighter breaks off without firing'
  },
  {
    roll: '5',
    effect: 'Fighter attacks normally (b)'
  },
  {
    roll: '6',
    effect: 'Fighter destroyed'
  }
]

export default eventHandler(async () => sprayFire)
