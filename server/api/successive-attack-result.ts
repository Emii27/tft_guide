import type { SuccessiveAttackResult } from '~/types'
import { EnemyAltitude, EnemyDirection } from '~/types/enum'

const successiveAttackResult: SuccessiveAttackResult[] = [
  {
    roll: '1',
    position: EnemyDirection.D1200,
    altitude: EnemyAltitude.High
  },
  {
    roll: '2',
    position: EnemyDirection.D1030,
    altitude: EnemyAltitude.Level
  },
  {
    roll: '3',
    position: EnemyDirection.D0300,
    altitude: EnemyAltitude.Low
  },
  {
    roll: '4',
    position: EnemyDirection.D0130,
    altitude: EnemyAltitude.Low
  },
  {
    roll: '5',
    position: EnemyDirection.D0900,
    altitude: EnemyAltitude.Level
  },
  {
    roll: '6',
    position: EnemyDirection.D0600,
    altitude: EnemyAltitude.High
  }
]

export default eventHandler(async () => successiveAttackResult)
