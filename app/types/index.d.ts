import type { EnnemyDirection } from '~/types/enum'

export interface DefensiveFire {
  direction: EnnemyDirection
  sprayFire: boolean
  low: string
  level: string
  high: string
}
