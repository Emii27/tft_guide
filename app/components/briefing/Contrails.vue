<script setup lang="ts">
import TableCard from '~/components/utils/TableCard.vue'
import type { TableCardHeader } from '~/types/table-card'

const title: TableCardHeader = {
  code: '4-4',
  name: 'Contrails form',
  roll: '1D10'
}
const data = [
  {
    roll: '<7',
    effect: 'No effect'
  },
  {
    roll: '8+',
    effect: 'Contrails form'
  }
]
</script>

<template>
  <TableCard
    :title="title"
    :data="data"
  >
    <template #tableFooter>
      Doesn't apply if below 10k feet
    </template>
  </Tablecard>
</template>
