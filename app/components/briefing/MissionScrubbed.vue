<script setup lang="ts">
import type { TableCardHeader } from '~/types/table-card'
import TableCard from '~/components/utils/TableCard.vue'

const month = useState('currentMonth')
const year = useState('currentYear')

const isAboveTreshold = computed(() => {
  const currentDate = new Date(`${month} ${year}`)
  const treshold = new Date('Apr 1944')
  return currentDate >= treshold
})

const title: TableCardHeader = {
  name: 'Scrubbed Mission'
}
const data = [
  {
    roll: '<14',
    effect: 'Same target ; 1 day delay'
  },
  {
    roll: '15-26',
    effect: 'Same target ; 2 day delay'
  },
  {
    roll: '27-63',
    effect: 'Roll for another target ; 1 day delay'
  },
  {
    roll: '64+',
    effect: 'Roll for another target ; 2 day delay'
  }
]
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll 1D100'
  },
  {
    accessorKey: 'effect',
    header: 'Effect'
  }
]
</script>

<template>
  <TableCard
    :title="title"
    :data="data"
    :columns="columns"
  >
    <template #tableLeftAside>
      <UCard
        variant="soft"
        class="mb-4"
      >
        <template #header>
          Is the mission scrubbed? ; <i>1D10</i>
        </template>

        {{ month }} {{ year }}:

        <ul
          v-if="isAboveTreshold"
          class="mt-2"
        >
          <li><8 = Mission executed</li>
          <li>9+ = Mission scrubbed</li>
        </ul>
        <ul
          v-else
          class="mt-2"
        >
          <li><7 = Mission executed</li>
          <li>8+ = Mission scrubbed</li>
        </ul>

        <template #footer>
          If the mission is scrubbed, roll on the following table:
        </template>
      </UCard>
    </template>
  </TableCard>
</template>
