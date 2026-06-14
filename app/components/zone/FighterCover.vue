<script setup lang="ts">
import { Weather } from '~/types/enum'

const month = useState('currentMonth')
const year = useState('currentYear')

const { data: data } = await useFetch('/api/fighter-cover', {
  query: { month, year }
})
const dataFiltered = computed(() => data.value?.results)
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      Fighter cover for {{ month }} {{ year }} ; <i>1D10</i>
    </template>
    <UTable
      :data="dataFiltered"
      @contextmenu="onContextMenu"
    />
    <div class="px-4 py-3 border-t border-accented">
      The letter next to each zone correspond to a group of zone. Roll only once for each group
    </div>
    <UCard
      variant="soft"
      class="mb-4"
    >
      <ul>
        <li>+2 if Delayed Form-Up</li>
        <li>(f5): Use for zone 5 for specified targets in France, as per Gazetteer annotation</li>
      </ul>
    </UCard>
  </UCard>
</template>
