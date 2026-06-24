<script setup lang="ts">
import type { TableCardHeader } from '~/types/table-card'
import TableCard from '~/components/utils/TableCard.vue'
import { FighterCoverType, Weather } from '~/types/enum'

const month = useState('currentMonth')
const year = useState('currentYear')

const title: TableCardHeader = {
  code: '5-1',
  name: 'Fighter Resistance',
  roll: '1D10'
}
const { data: data } = await useFetch('/api/fighter-resistance', {
  query: { month, year }
})
const dataFiltered = computed(() => data.value?.results)
</script>

<template>
  <TableCard
    :title="title"
    :data="dataFiltered"
  >
    <template #tableFooter>
      If the zone DRM is N/A, then automatic None result
    </template>
    <template #tableAside>
      <ul>
        <li class="mb-2">
          X Zone DRM
        </li>
        <li>-1 if {{ Weather.HalfCloud }}</li>
        <li>-2 if {{ Weather.FullCloud }}</li>
        <li class="mb-2">
          -1 if Contrails form
        </li>
        <li>-1 if Fighter Cover is {{ FighterCoverType.Good }}</li>
        <li>+1 if Fighter Cover is {{ FighterCoverType.Poor }}</li>
        <li class="mb-2">
          +2 if Fighter Cover is {{ FighterCoverType.None }}
        </li>
        <li>+1 if Formation is Dispersed</li>
        <li>+2 if Out of Formation</li>
      </ul>
    </template>
  </TableCard>
</template>
