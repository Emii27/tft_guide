<script setup lang="ts">
import TableCard from '~/components/utils/TableCard.vue'
import type { TableCardHeader } from '~/types/table-card'

const title: TableCardHeader = {
  code: '5-2',
  name: 'Number of Waves',
  roll: '1D10'
}
const data = [{
  roll: '<2',
  waves: '0'
}, {
  roll: '3-6',
  waves: '1'
}, {
  roll: '7-9',
  waves: '2'
}, {
  roll: '10+',
  waves: '3'
}]
</script>

<template>
  <TableCard
    :title="title"
    :data="data"
  >
    <template #tableAside>
      <ul>
        <li>-3 if resistance is Token</li>
        <li>-2 if resistance is Light</li>
        <li>+1 if resistance is Heavy</li>
        <li class="mt-4">
          +1 if in Target Zone
        </li>
        <li>-1 if bomber cell is Middle</li>
        <li>+1 if bomber cell is Low or Low-Low</li>
        <li>+1 if lost bombers due to collision</li>
      </ul>
    </template>
  </TableCard>
</template>
