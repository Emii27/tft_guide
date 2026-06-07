import { FrostbiteArea } from '~/types/enum'
import type { FrostbiteLocation } from '~/types'

const frostbiteLocation: FrostbiteLocation[] = [
  {
    roll: '2',
    area: FrostbiteArea.Forearm,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  },
  {
    roll: '3',
    area: FrostbiteArea.Wrist,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  },
  {
    roll: '4',
    area: FrostbiteArea.Ears,
    effect: '1-4: Right ear ; 5-6: Both sides'
  },
  {
    roll: '5',
    area: FrostbiteArea.Hand,
    effect: '1-2: Right hand ; 3-4: Left hand ; 5-6: Both hands'
  },
  {
    roll: '6',
    area: FrostbiteArea.Fingertips,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  },
  {
    roll: '7',
    area: FrostbiteArea.Face,
    effect: '1-4: Nose ; 5-6: Nose, cheeks and eyebrows'
  },
  {
    roll: '8',
    area: FrostbiteArea.Toes,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  },
  {
    roll: '9',
    area: FrostbiteArea.Foot,
    effect: '1-2: Right foot ; 3-4: Left foot ; 5-6: Both feet'
  },
  {
    roll: '10',
    area: FrostbiteArea.Ears,
    effect: '1-4: Left ear ; 5-6: Both ears'
  },
  {
    roll: '11',
    area: FrostbiteArea.Ankle,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  },
  {
    roll: '12',
    area: FrostbiteArea.LowerLeg,
    effect: '1-2: Right side ; 3-4: Left side ; 5-6: Both sides'
  }
]

export default eventHandler(async () => frostbiteLocation)
