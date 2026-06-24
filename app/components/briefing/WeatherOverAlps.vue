<script setup lang="ts">
import TableCard from '~/components/utils/TableCard.vue'
import type { TableCardHeader } from '~/types/table-card'

const title: TableCardHeader = {
  code: '4-1A',
  name: 'Weather over Alps',
  roll: '1D10'
}
const data = [
  {
    roll: '< 3',
    effect: 'Good weather'
  },
  {
    roll: '4-5',
    effect: 'High Clouds (can abort, if not: a)'
  },
  {
    roll: '6+',
    effect: 'Severe Icing (abort mission)'
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
        <li>+1 if in Dec, Jan, Feb</li>
        <li>-1 if in Jun, Jul, Aug</li>
      </ul>
      <ol class="px-4 mt-4">
        <li>
          <ul>
            <li class="mb-2">
              No Axis fighters encountered this turn
            </li>
            <li class="mb-2">
              Extreme cold applies, 1D6 for each gun position: 6 = Gun jammed
            </li>
            <li>Effect of dense cloud / snowstorm, 1D10: <8 = OK ; 9+ = Bomber crashes in the mountain, crew KIA</li>
          </ul>
        </li>
      </ol>
    </template>
  </TableCard>
</template>
