import type { DefensiveFire } from '~/types'
import { EnnemyDirection } from '~/types/enum'

const defensiveFire: DefensiveFire[] = [
  {
    direction: EnnemyDirection.D1200,
    sprayFire: false,
    low: 'Ball ; Nose',
    level: 'Top ; Nose',
    high: 'Top ; Nose'
  },
  {
    direction: EnnemyDirection.D0130,
    sprayFire: false,
    low: 'Ball ; R.Waist',
    level: 'Top',
    high: 'Top ; R.Waist'
  },
  {
    direction: EnnemyDirection.D0300,
    sprayFire: true,
    low: 'Ball ; R.Waist',
    level: 'Top ; Ball ; R.Waist',
    high: 'Top ; R.Waist'
  },
  {
    direction: EnnemyDirection.Dive,
    sprayFire: false,
    low: '',
    level: 'Top',
    high: ''
  },
  {
    direction: EnnemyDirection.D0600,
    sprayFire: true,
    low: 'Ball ; Tail',
    level: 'Tail',
    high: 'Top ; Radio ; Tail'

  },
  {
    direction: EnnemyDirection.Climb,
    sprayFire: true,
    low: '',
    level: 'Ball',
    high: ''
  },
  {
    direction: EnnemyDirection.D0900,
    sprayFire: true,
    low: 'Ball ; L.Waist',
    level: 'Top ; Ball ; L.Waist',
    high: 'Top ; L.Waist'
  },
  {
    direction: EnnemyDirection.D1030,
    sprayFire: false,
    low: 'Ball ; L.Waist',
    level: 'Top',
    high: 'Top ; L.Waist'
  }
]

export default eventHandler(async () => defensiveFire)
