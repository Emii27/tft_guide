import type { FighterDrivenOff } from '~/types'
import { FighterCoverType } from '~/types/enum'

const fighterDrivenOff: FighterDrivenOff[] = [
  {
    cover: FighterCoverType.Poor,
    results: [
      {
        roll: '<4',
        effect: '1 / 0'
      },
      {
        roll: '5-6',
        effect: '0 / 0'
      },
      {
        roll: '7',
        effect: '1 / 0'
      },
      {
        roll: '8+',
        effect: '0 / 0'
      }
    ]
  },
  {
    cover: FighterCoverType.Fair,
    results: [
      {
        roll: '2',
        effect: '2 / 1'
      },
      {
        roll: '3',
        effect: '3 / 1'
      },
      {
        roll: '4',
        effect: '2 / 1'
      },
      {
        roll: '5-6',
        effect: '1 / 1'
      },
      {
        roll: '7',
        effect: '2 / 1'
      },
      {
        roll: '8-10',
        effect: '1 / 1'
      },
      {
        roll: '11-12',
        effect: '1 / 0'
      },
      {
        roll: '13+',
        effect: '0 / 0'
      }
    ]
  },
  {
    cover: FighterCoverType.Good,
    results: [
      {
        roll: '<4',
        effect: '3 / 2'
      },
      {
        roll: '5-6',
        effect: '2 / 1'
      },
      {
        roll: '7',
        effect: '3 / 2'
      },
      {
        roll: '8',
        effect: '2 / 1'
      },
      {
        roll: '9-12',
        effect: '1 / 0'
      },
      {
        roll: '13+',
        effect: '0 / 0'
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const cover = query.cover

  return fighterDrivenOff.find(drivenOff =>
    cover == drivenOff.cover
  )
})
