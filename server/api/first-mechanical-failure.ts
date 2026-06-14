import type { FirstMechanicalFailure } from '~/types'

const firstMechanicalFailure: FirstMechanicalFailure[] = [
  {
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Dec 1942'),
    results: [
      {
        effect: 'No event',
        roll: '<73'
      },
      {
        effect: 'Mechanical failure',
        roll: '74-98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  },
  {
    periodStart: new Date('Jan 1943'),
    periodEnd: new Date('Jul 1943'),
    results: [
      {
        effect: 'No event',
        roll: '<77'
      },
      {
        effect: 'Mechanical failure',
        roll: '78-98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  },
  {
    periodStart: new Date('Aug 1943'),
    periodEnd: new Date('Dec 1943'),
    results: [
      {
        effect: 'No event',
        roll: '<81'
      },
      {
        effect: 'Mechanical failure',
        roll: '82-98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  },
  {
    periodStart: new Date('Jan 1944'),
    periodEnd: new Date('May 1944'),
    results: [
      {
        effect: 'No event',
        roll: '<88'
      },
      {
        effect: 'Mechanical failure',
        roll: '89-98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  },
  {
    periodStart: new Date('Jun 1944'),
    periodEnd: new Date('Feb 1945'),
    results: [
      {
        effect: 'No event',
        roll: '<94'
      },
      {
        effect: 'Mechanical failure',
        roll: '95-98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  },
  {
    periodStart: new Date('Mar 1945'),
    periodEnd: new Date('Apr 1945'),
    results: [
      {
        effect: 'No event',
        roll: '<97'
      },
      {
        effect: 'Mechanical failure',
        roll: '98'
      },
      {
        effect: 'Random Event',
        roll: '99+'
      }
    ]
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const month = query.month
  const year = query.year

  const date = new Date(`${month} ${year}`)

  return firstMechanicalFailure.find(mechFail =>
    date >= mechFail.periodStart
    && date <= mechFail.periodEnd
  )
})
