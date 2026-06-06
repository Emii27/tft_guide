import type { WoundLocation } from '~/types'
import { WoundArea } from '~/types/enum'

const kiaWoundLocation: WoundLocation[] = [
  {
    roll: '2',
    area: WoundArea.UpperExtremities,
    effect: '1: Severed hand ; 2: Severed forearm ; 3-4: Severed shoulder, 5: Both radii/ulnas shattered ; 6: Both humeri shattered'
  },
  {
    roll: '3',
    area: WoundArea.Abdomen,
    effect: '1-4: Shattered pelvis ; 5-6: Shattered lumbar spine'
  },
  {
    roll: '4',
    area: WoundArea.LowerExtremities,
    effect: '1: Severed foot ; 2: Severed leg ; 3: Severed thigh ; 4: Lacerated groin, both femurs shattered ; 5-6: Both fibulas/tibias shattered'
  },
  {
    roll: '5',
    area: WoundArea.Abdomen,
    effect: '1: Ruptured liver/kidney ; 2: Ruptured stomach, spleen ; 3-6: Ruptured intestine'
  },
  {
    roll: '6',
    area: WoundArea.Head,
    effect: 'Bullet/Shrapnel punctures the brain, point of entry: 1-2: Orbital surface ; 3-4: Nasal cavity ; 5-6: Mouth'
  },
  {
    roll: '7',
    area: WoundArea.Head,
    effect: 'Bullet/Shrapnel punctures the brain, point of entry: 1-2: Frontal bone ; 3-4: Temporal bone ; 5: Parietal bone ; 6: Occipital bone'
  },
  {
    roll: '8',
    area: WoundArea.Thorax,
    effect: '1-2: Shattered clavicle, ruptured subclavian artery and vein ; 3-6: Shattered ribs, ruptured lung'
  },
  {
    roll: '9',
    area: WoundArea.Thorax,
    effect: '1-4: Shattered sternum, ruptured heart ; 5: Shattered scapula ; 6: Shattered thoracic spine'
  },
  {
    roll: '10',
    area: WoundArea.Head,
    effect: '1-3: Shattered skill, part of head blown-off ; 4-6: Decapitation'
  },
  {
    roll: '11',
    area: WoundArea.Neck,
    effect: '1-3: Severe laceration, ruptured carotid artery and jugular vein ; 4-5: Shattered cervical spine ; 6: Decapitation'
  },
  {
    roll: '12',
    area: WoundArea.Face,
    effect: '1-3: Severe laceration ; 4: Shattered maxilla and mandible ; 5: Shattered nasal and zygomatic bones ; 6: Facial structure blown-off'
  }
]

export default eventHandler(async () => kiaWoundLocation)
