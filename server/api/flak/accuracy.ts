import type { FlakAccuracyResult } from '~/types'
import { FlakAccuracy } from '~/types/enum'

const flakAccuracy: FlakAccuracyResult[] = [
  {
    roll: '< 2',
    effect: FlakAccuracy.Inaccurate + ' (-1 hit on table 6-3)'
  },
  {
    roll: '3-4',
    effect: FlakAccuracy.Accurate + ' (No modifier)'
  },
  {
    roll: '5+',
    effect: FlakAccuracy.VeryAccurate + ' (+1 hit on table 6-3)'
  }
]
export default eventHandler(async () => flakAccuracy)
