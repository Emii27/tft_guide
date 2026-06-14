import type { FriendlyAirspace } from '~/types'

const friendlyAirspace: FriendlyAirspace[] = [
  {
    periodStart: new Date('Aug 1942'),
    periodEnd: new Date('Mar 1943'),
    outboundFlight: '1',
    inboundFlight: '1'
  },
  {
    periodStart: new Date('Apr 1943'),
    periodEnd: new Date('Jun 1943'),
    outboundFlight: '<2',
    inboundFlight: '1'
  },
  {
    periodStart: new Date('Jul 1943'),
    periodEnd: new Date('Dec 1943'),
    outboundFlight: '<2',
    inboundFlight: '<2'
  },
  {
    periodStart: new Date('Jan 1944'),
    periodEnd: new Date('Apr 1944'),
    outboundFlight: '<3',
    inboundFlight: '<2'
  },
  {
    periodStart: new Date('May 1944'),
    periodEnd: new Date('Dec 1944'),
    outboundFlight: '<3',
    inboundFlight: '<3'
  },
  {
    periodStart: new Date('Jan 1945'),
    periodEnd: new Date('Apr 1945'),
    outboundFlight: '<4',
    inboundFlight: '<3'
  }
]

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const month = query.month
  const year = query.year

  const date = new Date(`${month} ${year}`)

  return friendlyAirspace.find(airspace =>
    date >= airspace.periodStart
    && date <= airspace.periodEnd
  )
})
