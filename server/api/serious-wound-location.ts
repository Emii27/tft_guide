import type { WoundLocation } from '~/types'
import { WoundArea } from '~/types/enum'

const lightWoundLocation: WoundLocation[] = [
  {
    roll: '2',
    area: WoundArea.Face,
    effect: '1-3: Severe laceration (a) ; 4: broken mandible (d) ; 5: Shattered nasal cartilage (d) ; 6: Inflamed globe (a)'
  },
  {
    roll: '3',
    area: WoundArea.UpperExtremities,
    effect: '1: Hand severed (h) ; 2: Shattered carpal bones (e) ; 3: Broken radius (e) ; 4: Broken ulna (b) ; 5-6: Broken humerus (e)'
  },
  {
    roll: '4',
    area: WoundArea.Head,
    effect: '1-3: Skull surface grazed, inflamed deep tissue/brain (g) ; 4-6: Shrapnel lodged in skull (h)'
  },
  {
    roll: '5',
    area: WoundArea.Head,
    effect: '1-2: Cracked frontal bone (b) ; 3-4: Cracked temporal bone (b) ; 5: Cracked parietal bone (b) ; 6: Cracked occipital bone (b)'
  },
  {
    roll: '6',
    area: WoundArea.Thorax,
    effect: 'Broken rib, inflamed lung (d)'
  },
  {
    roll: '7',
    area: WoundArea.Abdomen,
    effect: 'Shrapnel punctures abdominal cavity. 1-2: Inflamed liver and kidney (h) ; 3-4: Inflamed stomach and spleen (h) ; 5-6: Inflamed intestines (h)'
  },
  {
    roll: '8',
    area: WoundArea.Thorax,
    effect: '1: Broken clavicle, subclavian artery cut (h) ; 2-3: Broken rib, inflamed heart (d) ; 4-5: Broken sternum, inflamed heart (d) ; 6: Broken scapula (c)'
  },
  {
    roll: '9',
    area: WoundArea.LowerExtremities,
    effect: '1: Severed foot (h) ; 2: Shattered tarsal bones (h) ; 3: Broken fibula (f) ; 4: Broken tibia (f) ; 5-6: Broken femur (f)'
  },
  {
    roll: '10',
    area: WoundArea.Abdomen,
    effect: 'Shrapnel punctures abdominal cavity. 1-2: Inflamed intestines (h) ; 3-4: Groin cut, inflamed bladder (h) ; 5-6: Cracked pelvis, inflamed intestines (h)'
  },
  {
    roll: '11',
    area: WoundArea.LowerExtremities,
    effect: '1: Severed foot (h) ; 2: Shattered tarsal bones (h) ; 3: Broken fibula (f) ; 4: Broken tibia (f) ; 5-6: Broken femur (f)'
  },
  {
    roll: '12',
    area: WoundArea.Neck,
    effect: '1-4: Severe laceration (a) ; 5: Carotid artery cut (h) ; 6: Jugular vein cut (KIA)'
  }
]

export default eventHandler(async () => lightWoundLocation)
