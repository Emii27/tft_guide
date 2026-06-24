<script setup lang="ts">
import type { TableCardHeader } from '~/types/table-card'
import TableCard from '~/components/utils/TableCard.vue'
import { Weather } from '~/types/enum'

const title: TableCardHeader = {
  code: '3-1',
  name: 'Weather over base',
  roll: '1D10'
}
const data = [
  {
    roll: '<8',
    effect: 'Good weather'
  },
  {
    roll: '9-11',
    effect: 'Poor weather'
  },
  {
    roll: '12+',
    effect: 'Bad weather'
  }
]
</script>

<template>
  <TableCard
    :title="title"
    :data="data"
  >
    <template #tableAside>
      <ul class="mb-4">
        <li>+2 if mission in Jan, Feb, Dec</li>
        <li>+1 if mission in Mar, Apr, Oct, Nov</li>
      </ul>
      <b>For landing only:</b>
      <ul>
        <li>+2 if Zone 2 was {{ Weather.FullCloud }}</li>
        <li>+1 if Zone 2 was {{ Weather.HalfCloud }}</li>
        <li>-1 if Zone 2 was {{ Weather.Clear }}</li>
      </ul>
    </template>
  </TableCard>
</template>
