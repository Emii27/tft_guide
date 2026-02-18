import type { Wounds } from '~/types'

const wounds: Wounds[] = [
  {
    roll: '1-3',
    effect: 'Light wound (a, b)'
  },
  {
    roll: '4-5',
    effect: 'Serious wound (c, d)'
  },
  {
    roll: '6',
    effect: 'KIA'
  }
]

export default eventHandler(async () => wounds)
