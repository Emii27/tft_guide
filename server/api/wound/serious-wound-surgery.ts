import type { WoundSurgery } from '~/types'

const seriousWoundSurgery: WoundSurgery[] = [
  {
    type: 'Head: Shrapnel lodged in skull',
    time: 'Post Flight',
    firstRoll: '1-4: Survives ; 5: Dies in Surgery ; 6: Surgery infection (2nd roll)',
    secondRoll: '1-4: Infection treated ; 5-6: Dies from wounds'
  },
  {
    type: 'Head: Shrapnel lodged in skull',
    time: 'Post Surgery',
    firstRoll: '1-2: 2 weeks ; 3-4: 3 weeks ; 5: 4 weeks ; 6: Discharge',
    secondRoll: ''
  },
  {
    type: 'Neck: Cartoid artery cut',
    time: 'In Flight',
    firstRoll: '1-4: Bleeding controlled ; 5-6: Bleeding continues (2nd roll)',
    secondRoll: '1-4: Bleeding controlled ; 5: Bleeds out in 5 zones ; 6: Bleeds out in 3 zones'
  },
  {
    type: 'Neck: Cartoid artery cut',
    time: 'Post Flight',
    firstRoll: '1-4: Survives ; 5: Dies in Surgery ; 6: Surgery infection (2nd roll)',
    secondRoll: '1-4: Infection treated ; 5-6: Dies from wounds'
  },
  {
    type: 'Neck: Cartoid artery cut',
    time: 'Post Surgery',
    firstRoll: '1-2: 8 weeks ; 3-4: 10 weeks ; 5: 12 weeks ; 6: Discharge',
    secondRoll: ''
  },
  {
    type: 'Broken clavicule',
    time: 'In Flight',
    firstRoll: '1-4: Bleeding controlled ; 5-6: Bleeding continues (2nd roll)',
    secondRoll: '1-4: Bleeding controlled ; 5: Bleeds out in 6 zones ; 6: Bleeds out in 4 zones'
  },
  {
    type: 'Broken clavicule',
    time: 'Post Flight',
    firstRoll: '1-4: Survives ; 5: Dies in Surgery ; 6: Surgery infection (2nd roll)',
    secondRoll: '1-4: Infection treated ; 5-6: Dies from wounds'
  },
  {
    type: 'Broken clavicule',
    time: 'Post Surgery',
    firstRoll: '1-2: 4 weeks ; 3-4: 6 weeks ; 5: 8 weeks ; 6: Discharge',
    secondRoll: ''
  },
  {
    type: 'Abdomen',
    time: 'In Flight',
    firstRoll: '1-4: Bleeding controlled ; 5-6: Bleeding continues (2nd roll)',
    secondRoll: '1-4: Bleeding controlled ; 5: Bleeds out in 8 zones ; 6: Bleeds out in 6 zones'
  },
  {
    type: 'Abdomen',
    time: 'Post Flight',
    firstRoll: '1-4: Survives ; 5: Dies in Surgery ; 6: Surgery infection (2nd roll)',
    secondRoll: '1-4: Infection treated ; 5-6: Dies from wounds'
  },
  {
    type: 'Abdomen',
    time: 'Post Surgery',
    firstRoll: '1-2: 8 weeks ; 3-4: 10 weeks ; 5: 12 weeks ; 6: Discharge',
    secondRoll: ''
  },
  {
    type: 'Severed Hand/Foot',
    time: 'In Flight',
    firstRoll: '1-4: Bleeding controlled ; 5-6: Bleeding continues (2nd roll)',
    secondRoll: '1-4: Bleeding controlled ; 5: Bleeds out in 5 zones ; 6: Bleeds out in 3 zones'
  },
  {
    type: 'Severed Hand/Foot',
    time: 'Post Flight',
    firstRoll: '1-4: Survives ; 5: Dies in Surgery ; 6: Surgery infection (2nd roll)',
    secondRoll: '1-3: Infection treated ; 5: Arm removed ; 6: Dies from wounds'
  },
  {
    type: 'Severed Hand/Foot',
    time: 'Post Surgery',
    firstRoll: 'Discharge',
    secondRoll: ''
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const type = query.type

  if (type) {
    return seriousWoundSurgery.filter(surgery => surgery.type === type)
  }
  return seriousWoundSurgery
})
