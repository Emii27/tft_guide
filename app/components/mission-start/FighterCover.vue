<script setup lang="ts">
import TableCard from '~/components/utils/TableCard.vue'
import type { TableCardHeader } from '~/types/table-card'

const month = useState('currentMonth')
const year = useState('currentYear')

const title: TableCardHeader = {
  name: `Fighter cover for ${month.value} ${year.value}`,
  roll: '1D10'
}
const { data: data } = await useFetch('/api/fighter-cover', {
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
      The letter next to each zone correspond to a group of zone. Roll only once for each group
    </template>

    <UCard variant="soft">
      <ul>
        <li>+2 if Delayed Form-Up</li>
        <li>(f5): Use for zone 5 for specified targets in France, as per Gazetteer annotation</li>
      </ul>
    </UCard>
  </TableCard>
</template>
