<script setup lang="ts">
const { data: data } = await useFetch('/api/wound/kia-wound-location')
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
      (5-17C) KIA wound location ; <i>2D6</i>
    </template>
    <UTable
      :data="data"
      :columns="columns"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
