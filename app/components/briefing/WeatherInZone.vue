<script setup lang="ts">
import { Weather } from '~/types/enum'
import type { TableCardHeader } from '~/types/table-card'
import TableCard from '~/components/utils/TableCard.vue'

const title: TableCardHeader = {
  code: '4-1',
  name: 'Weather in Zone',
  roll: '1D10'
}
const data = [
  {
    roll: '< 3',
    effect: Weather.Clear
  },
  {
    roll: '4-6',
    effect: Weather.Haze
  },
  {
    roll: '7-9',
    effect: Weather.HalfCloud
  },
  {
    roll: '10+',
    effect: Weather.FullCloud + ' (a)'
  }
]
</script>

<template>
  <TableCard
    :title="title"
    :data="data"
  >
    <template #tableAside>
      <ul>
        <li>+2 if zone 2 or Weather over Base was Poor or Bad</li>
        <li>+1 if Prior zone was {{ Weather.Haze }}</li>
        <li>+2 if Prior zone was {{ Weather.HalfCloud }}</li>
        <li>+3 if Prior zone was {{ Weather.FullCloud }}</li>
      </ul>
      <ol class="px-4 mt-4">
        <li>If in Alps zone, roll on table 4-1A</li>
      </ol>
    </template>
  </TableCard>
</template>
