import type { FlakTypeResult } from '~/types'
import { FlakType } from '~/types/enum'

const flakType: FlakTypeResult[] = [
  {
    roll: '< 2',
    effect: FlakType.Barrage
  },
  {
    roll: '3-4',
    effect: FlakType.PredictedConcentration
  },
  {
    roll: '5+',
    effect: FlakType.ContinuePointFire
  }
]
export default eventHandler(async () => flakType)
