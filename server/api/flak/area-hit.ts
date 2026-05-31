import type { FlakAreaHit } from '~/types'

const flakAreaHit: FlakAreaHit[] = [
  {
    roll: '2',
    effect: 'Bomb Bay'
  },
  {
    roll: '3',
    effect: 'Superficial Damage'
  },
  {
    roll: '4',
    effect: 'Radio Room'
  },
  {
    roll: '5',
    effect: 'Tail'
  },
  {
    roll: '6',
    effect: 'Left Wing'
  },
  {
    roll: '7',
    effect: 'Superficial Damage'
  },
  {
    roll: '8',
    effect: 'Right Wing'
  },
  {
    roll: '9',
    effect: 'Waist'
  },
  {
    roll: '10',
    effect: 'Nose'
  },
  {
    roll: '11',
    effect: 'Superficial Damage'
  },
  {
    roll: '12',
    effect: 'Pilot Compartment'
  }
]
export default eventHandler(async () => flakAreaHit)
