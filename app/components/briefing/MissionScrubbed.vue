<script setup lang="ts">
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
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      Scrubbed Mission
    </template>
    <UCard
      variant="soft"
      class="mb-4"
    >
      <template #header>
        Is the mission scrubbed? ; <i>1D10</i>
      </template>
      <ul>
        <li>Aug 1942 - Mar 1944: <7 = Mission executed ; 8+ = Mission scrubbed</li>
        <li>Apr 1942 - Apr 1945: <8 = Mission executed ; 9+ = Mission scrubbed</li>
      </ul>
      <p class="mt-4">
        If the mission is scrubbed, roll on the table below.
      </p>
    </UCard>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
