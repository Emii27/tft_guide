import type { Wounds } from '~/types'
import { WoundType } from '~/types/enum'

const wounds: Wounds[] = [
  {
    roll: '1-3',
    effect: WoundType.LightWound + '(a, b)'
  },
  {
    roll: '4-5',
    effect: WoundType.SeriousWound + '(c, d)'
  },
  {
    roll: '6',
    effect: WoundType.Killed
  }
]

export default eventHandler(async () => wounds)
