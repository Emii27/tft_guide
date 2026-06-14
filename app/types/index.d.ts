import type {
  FrostbiteArea,
  type WoundArea,
  type EnemyAltitude,
  type EnemyType,
  type EnemyDirection,
  type EnemyExperience

} from '~/types/enum'

export interface FormationType {
  name: string
  startDate: Date
  endDate: Date
  positions: FormationPosition[]
}

export interface FormationPosition {
  roll: string
  position: string
  effect: string
}

export interface EnemyExperienceAttributionTable {
  periodStart: Date
  periodEnd: Date
  results: EnemyExperienceAttribution[]
}

export interface EnemyExperienceAttribution {
  enemyExperience: EnemyExperience
  roll: string
  max: string
  extra: string
}

export interface DefensiveFire {
  direction: EnemyDirection
  sprayFire: boolean
  low: string
  level: string
  high: string
}

export interface SprayFire {
  roll: string
  effect: string
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

export interface FlakStrengthResult {
  roll: string
  effect: FlakStrength
}

export interface FlakTypeResult {
  roll: string
  effect: FlakType
}

export interface FlakAccuracyResult {
  roll: string
  effect: string
}

export interface FlakHit {
  strength: FlakStrength
  results: FlakHitByStrength[]
}

export interface FlakHitByStrength {
  roll: string
  effect: bool
}

export interface FlakShellHit {
  roll: string
  effect: string
}

export interface FlakAreaHit {
  roll: string
  effect: string
}

export interface Wounds {
  roll: string
  effect: string
}

export interface WoundLocation {
  roll: string
  area: WoundArea
  effect: string
}

export interface WoundSurgery {
  type: string
  time: string
  firstRoll: string
  secondRoll: string
}

export interface Frostbite {
  roll: string
  effect: string
}

export interface FrostbiteLocation {
  roll: string
  area: FrostbiteArea
  effect: string
}

export interface FrostbiteRecovery {
  roll: string
  nipExtremities: string
  nipOther: string
  biteExtremities: string
  biteOther: string
}
