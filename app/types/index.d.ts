import type { EnemyAltitude, type EnemyType, type EnemyDirection } from '~/types/enum'

export interface DefensiveFire {
  direction: EnemyDirection
  sprayFire: boolean
  low: string
  level: string
  high: string
}

export interface DefensiveFireHit {
  enemyType: EnemyType
  results: T[]
}

export interface OffensiveFireHit {
  direction: EnemyDirection
  results: T[]
}

export interface OffensiveFireShell {
  direction: EnemyDirection
  results: T[]
}

export interface OffensiveFireMultiplier {
  enemyType: EnemyType
  periodStart: Date
  periodEnd: Date
  results: T[]
}

export interface SuccessiveAttackResult {
  roll: string
  position: EnemyDirection
  altitude: EnemyAltitude
}
