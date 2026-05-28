<script setup lang="ts">
const { data } = await useFetch('/api/fighter-resistance')
function onContextMenu() {}
</script>

<template>
  <UCard class="p-0">
    <template #header>
      (5-1) Fighter Resistance ; <i>1D10</i>
    </template>
    <UTable
      :data="data"
      @contextmenu="onContextMenu"
    />
  </UCard>
</template>
