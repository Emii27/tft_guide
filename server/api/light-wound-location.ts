import type { WoundLocation } from '~/types'
import { WoundArea } from '~/types/enum'

const lightWoundLocation: WoundLocation[] = [
  {
    roll: '2',
    area: WoundArea.Thorax,
    effect: '1-4: Cracked rib (b) ; 5-6: Torn trapezius muscle (e)'
  },
  {
    roll: '3',
    area: WoundArea.Thorax,
    effect: '1-3: Chest cut (a) ; 4-6: Torn pectoralis muscle (e)'
  },
  {
    roll: '4',
    area: WoundArea.Head,
    effect: '1-3: Skull surface grazed (a) ; 4-6: Skull deflects shrapnel, slight concussion (d)'
  },
  {
    roll: '5',
    area: WoundArea.UpperExtremities,
    effect: '1: Finger severed (b) ; 2: Hand cut (a) ; 3-4: forearm cut (a) ; 5-6: torn flexor muscle (e)'
  },
  {
    roll: '6',
    area: WoundArea.UpperExtremities,
    effect: '1-3: Shoulder cut (a) ; 4: torn deltoid muscle (e) ; 5: torn bicep muscle (e) ; 6: torn triceps muscle (e)'
  },
  {
    roll: '7',
    area: WoundArea.LowerExtremities,
    effect: '1-3: Thigh cut (a) ; 4-5: Torn vastus muscle (e) ; 6: Torn gluteal muscle (e)'
  },
  {
    roll: '8',
    area: WoundArea.LowerExtremities,
    effect: '1-3: Leg cut (a) ; 4: Torn flexor muscle (e) ; 5-6: Torn gastrocnemius muscle (e)'
  },
  {
    roll: '9',
    area: WoundArea.LowerExtremities,
    effect: '1: Toe severed (b) ; 2-4: Foot cut (a) ; 5-6: Torn calcaneal tendon (e)'
  },
  {
    roll: '10',
    area: WoundArea.Face,
    effect: '1-3: Face cut (a) ; 4-5: Nasal cartilage broken (b) ; 6: Lips cut, teeth missing (b)'
  },
  {
    roll: '11',
    area: WoundArea.Abdomen,
    effect: '1-3: Abdomen cut (a) ; 4-5: Torn abdominal oblique muscle (e) ; 6: Torn latissimus dorsi muscle (e)'
  },
  {
    roll: '12',
    area: WoundArea.Neck,
    effect: '1-2: Neck grazed (a) ; 3-4: Torn  sternocleidomastoid muscle (e) ; 5-6: Torn trapezius muscle (e)'
  }
]

export default eventHandler(async () => lightWoundLocation)
