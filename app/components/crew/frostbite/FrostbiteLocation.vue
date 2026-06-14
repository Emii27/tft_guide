<script setup lang="ts">
const { data } = await useFetch('/api/frostbite/frostbite-location')
const columns = [
  {
    accessorKey: 'roll',
    header: 'Roll'
  },
  {
    accessorKey: 'area',
    header: 'Area'
  },
  {
    accessorKey: 'effect',
    header: 'Effect 1D6'
  }
]
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-18A) Frostbite location ; <i>2D6</i>
    </template>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
