import type { FighterResistance } from '~/types'
import { GermanFighterResistance } from '~/types/enum'

const fighterResistance: FighterResistance[] = [
  {
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Nov 1943'),
    results: [
      {
        roll: '<0',
        effect: GermanFighterResistance.None
      },
      {
        roll: '1-3',
        effect: GermanFighterResistance.Light
      },
      {
        roll: '4-7',
        effect: GermanFighterResistance.Moderate
      },
      {
        roll: '8+',
        effect: GermanFighterResistance.Heavy
      }
    ]
  },
  {
    periodStart: new Date('Dec 1943'),
    periodEnd: new Date('Nov 1944'),
    results: [
      {
        roll: '<0',
        effect: GermanFighterResistance.None
      },
      {
        roll: '1-5',
        effect: GermanFighterResistance.Light
      },
      {
        roll: '6-8',
        effect: GermanFighterResistance.Moderate
      },
      {
        roll: '9+',
        effect: GermanFighterResistance.Heavy
      }
    ]
  },
  {
    periodStart: new Date('Dec 1944'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        roll: '<0',
        effect: GermanFighterResistance.None
      },
      {
        roll: '1-4',
        effect: GermanFighterResistance.Token
      },
      {
        roll: '5-7',
        effect: GermanFighterResistance.Light
      },
      {
        roll: '8+',
        effect: GermanFighterResistance.Moderate
      }
    ]
  }

]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const month = query.month
  const year = query.year

  const date = new Date(`${month} ${year}`)

  return fighterResistance.find(resistance =>
    date >= resistance.periodStart
    && date <= resistance.periodEnd
  )
})
