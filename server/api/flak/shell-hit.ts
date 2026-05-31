import type { FlakShellHit } from '~/types'

const flakShellHit: FlakShellHit[] = [
  {
    roll: '2',
    effect: 'Burst inside Plane'
  },
  {
    roll: '3',
    effect: '3'
  },
  {
    roll: '4-5',
    effect: '2'
  },
  {
    roll: '6-9',
    effect: '1'
  },
  {
    roll: '10-11',
    effect: '2'
  },
  {
    roll: '12',
    effect: '3'
  }
]
export default eventHandler(async () => flakShellHit)
