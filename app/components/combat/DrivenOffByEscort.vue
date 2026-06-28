<script setup lang="ts">
import TableCard from '~/components/utils/TableCard.vue'
import { FighterCoverType, Weather } from '~/types/enum'
import type { TableCardHeader } from '~/types/table-card'

const title: TableCardHeader = {
  code: '5-4',
  name: 'Enemy fighters driven off by escort',
  roll: '2D6'
}
const cover = ref(FighterCoverType.Good)
const coverTypes = Object.values(FighterCoverType)
const { data: data } = await useFetch('/api/combat/driven-off-by-escort', {
  query: { cover }
})
const dataFiltered = computed(() => data.value?.results)
</script>

<template>
  <TableCard
    :title="title"
    :data="dataFiltered"
  >
    <template #tableAside>
      <div v-if="cover != FighterCoverType.None">
        Effect: X / Y
        <ul>
          <li>X = Nb of enemies driven off in the 1st wave</li>
          <li>Y = Nb of enemies driven off in subsequent waves)</li>
        </ul>
        <ul class="mt-8">
          <li>+1 if bomber is Off-Course</li>
          <li>+1 if {{ Weather.HalfCloud }}</li>
          <li>+2 if {{ Weather.FullCloud }}</li>
        </ul>
      </div>
      <div v-else>
        No enemy driven off if fighter cover is {{ FighterCoverType.None }}
      </div>
    </template>
    <template #footer>
      Fighter cover:
      <USelect
        v-model="cover"
        :items="coverTypes"
        class="ml-2 w-50"
      />
    </template>
  </TableCard>
</template>
