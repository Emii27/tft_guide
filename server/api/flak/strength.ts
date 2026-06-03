import type { FlakStrengthResult } from '~/types'
import { FlakStrength } from '~/types/enum'

const flakStrength: FlakStrengthResult[] = [
  {
    roll: '< 1',
    effect: FlakStrength.NoFlak
  },
  {
    roll: '2-3',
    effect: FlakStrength.LightFlak
  },
  {
    roll: '4-5',
    effect: FlakStrength.ModerateFlak
  },
  {
    roll: '6+',
    effect: FlakStrength.HeavyFlak
  }
]
export default eventHandler(async () => flakStrength)
