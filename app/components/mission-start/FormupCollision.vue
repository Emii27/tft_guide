<script setup lang="ts">
const data = [
  {
    roll: '<7',
    effect: 'Minor ; 2 hits in one wing'
  },
  {
    roll: '8-10',
    effect: 'Minor ; 2 hits in tail area'
  },
  {
    roll: '11',
    effect: 'Major ; treat as BIP in wing or tail'
  },
  {
    roll: '12',
    effect: 'Catastrophic ; Aircraft destroyed, roll for uncontrolled bailout'
  }
]
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll 2D6'
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
      Form-up collision
    </template>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
