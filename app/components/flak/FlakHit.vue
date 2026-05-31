<script setup lang="ts">
import type { TableColumn } from '#ui/components/Table.vue'
import type { FlakHitByStrength } from '~/types'

const isOverTargetZone = useState('isOverTargetZone')
const flakStrength = useState('flakStrength')

const { data } = await useFetch('/api/flak/hit', {
  query: { flakStrength }
})
const dataFiltered = computed(() => data.value?.results)
const columns: TableColumn<FlakHitByStrength>[] = [
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'effect',
    header: 'Effect',
    cell: ({ row }) => row.getValue('effect') ? 'Hit' : 'Miss'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (6-3) Flak to hit the bomber ; <i>2D6</i>
    </template>
    <div class="row">
      <UTable
        :data="dataFiltered"
        :columns="columns"
        @contextmenu="onContextMenu"
      />
      <UCard
        variant="soft"
        class="px-4"
      >
        <div v-if="!isOverTargetZone">
          <b>Over Non-Target Zone:</b>
          <ul>
            <li class="mb-2">
              Roll x3 if out of formation and <10k feet
            </li>
            <li class="mb-2">
              Roll x2 if over a costal zone
            </li>
            <li>Roll x1 if over any other land zone</li>
          </ul>
        </div>
        <div v-else>
          <b>Over Target Zone:</b>
          <ul>
            <li class="mb-2">
              Roll x5 if over Berlin or Merseburg
            </li>
            <li class="mb-2">
              Roll x4 if over Bremen, Cologne, Frankfurt, Hamburg, Kassel, La Rochelle, Leipzig, Lorient, Munich, Ploesti, Regensburg, St-Nazaire, Schweinfurt, or Stuttgart
            </li>
            <li>Roll x3 if over any other target</li>
          </ul>
        </div>
      </UCard>
    </div>
  </UCard>
</template>
