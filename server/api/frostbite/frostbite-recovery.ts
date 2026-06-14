import type { FrostbiteRecovery } from '~/types'

const frostbiteRecovery: FrostbiteRecovery[] = [
  {
    roll: '1',
    nipExtremities: '2 days',
    nipOther: '0 day',
    biteExtremities: '4 days',
    biteOther: '1 day'
  },
  {
    roll: '2-3',
    nipExtremities: '3 days',
    nipOther: '1 day',
    biteExtremities: '7 days',
    biteOther: '3 days'
  },
  {
    roll: '4-5',
    nipExtremities: '5 days',
    nipOther: '2 days',
    biteExtremities: '14 days',
    biteOther: '6 days'
  },
  {
    roll: '6',
    nipExtremities: '7 days',
    nipOther: '5 days',
    biteExtremities: '21 days',
    biteOther: '10 days'
  }
]

export default eventHandler(async () => frostbiteRecovery)
