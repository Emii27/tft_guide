import type { Frostbite } from '~/types'

const frostbite: Frostbite[] = [
  {
    roll: '1-3',
    effect: 'No frostbite this turn'
  },
  {
    roll: '4-5',
    effect: 'Frostbite (a)'
  },
  {
    roll: '6',
    effect: 'Severe Frostbite (b)'
  }
]

export default eventHandler(async () => frostbite)
