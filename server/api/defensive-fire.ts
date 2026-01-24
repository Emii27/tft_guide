import type { DefensiveFire } from '~/types'
import { EnemyDirection } from '~/types/enum'

const defensiveFire: DefensiveFire[] = [
  {
    direction: EnemyDirection.D1200,
    sprayFire: false,
    low: 'Ball ; Nose',
    level: 'Top ; Nose',
    high: 'Top ; Nose'
  },
  {
    direction: EnemyDirection.D0130,
    sprayFire: false,
    low: 'Ball ; R.Waist',
    level: 'Top',
    high: 'Top ; R.Waist'
  },
  {
    direction: EnemyDirection.D0300,
    sprayFire: true,
    low: 'Ball ; R.Waist',
    level: 'Top ; Ball ; R.Waist',
    high: 'Top ; R.Waist'
  },
  {
    direction: EnemyDirection.Dive,
    sprayFire: false,
    low: '',
    level: 'Top',
    high: ''
  },
  {
    direction: EnemyDirection.D0600,
    sprayFire: true,
    low: 'Ball ; Tail',
    level: 'Tail',
    high: 'Top ; Radio ; Tail'

  },
  {
    direction: EnemyDirection.Climb,
    sprayFire: true,
    low: '',
    level: 'Ball',
    high: ''
  },
  {
    direction: EnemyDirection.D0900,
    sprayFire: true,
    low: 'Ball ; L.Waist',
    level: 'Top ; Ball ; L.Waist',
    high: 'Top ; L.Waist'
  },
  {
    direction: EnemyDirection.D1030,
    sprayFire: false,
    low: 'Ball ; L.Waist',
    level: 'Top',
    high: 'Top ; L.Waist'
  }
]

export default eventHandler(async () => defensiveFire)
